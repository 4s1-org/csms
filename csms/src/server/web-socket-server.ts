import WebSocket from 'ws'
import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { URL } from 'url'
import { IncomingMessage } from 'http'
import { Socket } from 'net'
import { TLSSocket } from 'tls'
import { Logger, verifyPassword } from '@yellowgarbagebag/common-lib'
import {
  CsmsToUiMsg,
  CsmsToUiCmdEnum,
  ChargingStationModel,
  UiToCsmsMsg,
  UiToCsmsCmdEnum,
  UiToCsmsUserSubCmdEnum,
  RfidCardModel,
  UiToCsmsCsSubCmdEnum,
  ColorStateEnum,
} from '@yellowgarbagebag/csms-lib'
import { DataStorage } from '../config/data-storage'
import { IDataStorageSchema } from '../config/i-data-store-schema'
import { ChargingStation } from '../charging-station'
import { WsClient } from '../ws-client'
import { ProcessEnv } from '../process-env'
import {
  ChangeAvailabilityRequestDto,
  ComponentDto,
  DataTransferRequestDto,
  GetBaseReportRequestDto,
  GetVariableDataDto,
  GetVariablesRequestDto,
  OperationalStatusEnum,
  ReportBaseEnum,
  ResetEnum,
  ResetRequestDto,
  SetVariableDataDto,
  SetVariablesRequestDto,
  VariableDto,
} from '@yellowgarbagebag/ocpp-lib'
import { ServerUtils } from './server-utils'

export class WebSocketServer {
  protected logger: Logger = new Logger('Server', ProcessEnv.LOG_LEVEL)
  // Underlying HTTP/HTTPS server instance
  private server: https.Server | http.Server | undefined
  private wssChargingStations: WebSocket.Server | undefined
  private wssAdmin: WebSocket.Server | undefined
  // List of items from the config file
  private chargingStationModels: ChargingStationModel[]
  private chargingStations: ChargingStation[] = []
  private rfids: RfidCardModel[]

  constructor(private readonly dataStorage: DataStorage<IDataStorageSchema>) {
    this.logger.info(`Configfile: ${dataStorage.path}`)

    this.chargingStationModels = dataStorage.get('chargingStations') || []
    // Reset states
    for (const model of this.chargingStationModels) {
      model.state = ColorStateEnum.Red
      model.evseList = []
      model.failedLogins = model.failedLogins || 0
    }
    this.rfids = dataStorage.get('rfids') || []
  }

  /**
   * Start the whole server
   */
  public startServer(): void {
    // Create a WebSocket server for charging station connections.
    this.wssChargingStations = new WebSocket.Server({
      noServer: true,
    }).on('connection', (webSocket: WebSocket, model: ChargingStationModel): void => {
      this.logger.info('ChargingStation-Socket-Connection established')
      this.onChargingStationConnection(webSocket, model)
    })

    // Create a WebSocket server for admin connections.
    this.wssAdmin = new WebSocket.Server({
      noServer: true,
    }).on('connection', (webSocket: WebSocket): void => {
      this.logger.info('Admin-Socket-Connection established')
      this.onAdminConnection(webSocket)
    })

    // Choose HTTP or HTTPS base on config
    if (this.dataStorage.get('https') === false) {
      this.logger.info('Use http')
      this.server = http.createServer()
    } else {
      this.logger.info('Use https')
      this.server = https.createServer({
        cert: fs.readFileSync(path.join(__dirname, '..', '..', '..', 'data', 'certificate.crt')),
        key: fs.readFileSync(path.join(__dirname, '..', '..', '..', 'data', 'certificate.key')),
      })
    }

    // Handle WebSocket upgrade
    this.server.on('upgrade', (request: IncomingMessage, socket: Socket | TLSSocket, head: Buffer): void => {
      this.logger.info('upgrade connection')
      const header = ServerUtils.parseHeaders(request.headers)
      this.logger.info(`Client connected: ${header.secWebsocketKey} [${header.secWebsocketProtocol}]`)

      const { username, password } = ServerUtils.getCredentials(request, header)
      const myURL = new URL(request.url || '', 'http://localhost') // no matter which domain

      if (this.wssChargingStations && myURL.pathname.startsWith('/ocpp/')) {
        // Charging Station
        this.logger.info('Connection from charging station detected')
        const uniqueIdentifier = myURL.pathname.split('/')[2]

        // Check protocol
        if (!header.secWebsocketProtocol.includes('ocpp2.0.1')) {
          this.logger.warn(`Missing OCPP 2.0.1 protocol from ${uniqueIdentifier}`)
          return ServerUtils.send401(socket)
        }

        // Check credentials
        const model = this.handleChargingStationLogin(uniqueIdentifier, username, password)
        if (!model) {
          this.logger.warn(`Invalid login from ${uniqueIdentifier}`)
          return ServerUtils.send401(socket)
        }

        // Do the upgrade to ChargingStation WebSocket server
        this.wssChargingStations.handleUpgrade(request, socket, head, (webSocket: WebSocket): void => {
          if (this.wssChargingStations) {
            this.wssChargingStations.emit('connection', webSocket, model)
          }
        })
      } else if (this.wssAdmin && myURL.pathname.startsWith('/admin')) {
        // Admin
        this.logger.info('Connection from admin detected')

        // Check credentials
        const adminCredentials = this.dataStorage.get('adminCredentials')
        if (username !== adminCredentials.username || !verifyPassword(password, adminCredentials.passwordHash)) {
          return ServerUtils.send401(socket)
        }

        // Do the upgrade to Admin WebSocket server
        this.wssAdmin.handleUpgrade(request, socket, head, (webSocket: WebSocket): void => {
          if (this.wssAdmin) {
            this.wssAdmin.emit('connection', webSocket)
          }
        })
      } else {
        return ServerUtils.send401(socket)
      }
    })

    // Start the HTTP/HTTPS server
    const port = this.dataStorage.get('port')
    this.server.listen(port)
    this.logger.info(`WebSocketServer is running on port ${port}`)
  }

  /**
   * A new charging station connection appears.
   */
  private onChargingStationConnection(webSocket: WebSocket, model: ChargingStationModel): void {
    const client = new WsClient(model.uniqueIdentifier, webSocket)
    const cs = new ChargingStation(model, client, this.dataStorage.get('rfids'))
    this.chargingStations.push(cs)

    cs.connect()
    this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csState, model))

    webSocket.onclose = (): void => {
      cs.disconnect()
      this.chargingStations = this.chargingStations.filter((x) => x.model.uniqueIdentifier !== cs.model.uniqueIdentifier)
      this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csState, model))
    }

    webSocket.onerror = (err: any): void => {
      this.logger.error('Error' + err)
    }

    webSocket.onmessage = (data: WebSocket.MessageEvent): void => {
      client.onMessage(data.data, cs)
      this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csState, model))
    }
  }

  /**
   * Send a message to all admin connections.
   */
  private sendToUiAll(msg: CsmsToUiMsg): void {
    if (!this.wssAdmin) {
      return
    }

    for (const socket of this.wssAdmin?.clients) {
      this.sendToUiSingle(socket, msg)
    }
  }

  /**
   * Send a message to a single admin connection.
   */
  private sendToUiSingle(socket: WebSocket, msg: CsmsToUiMsg): void {
    if (socket.OPEN) {
      socket.send(JSON.stringify(msg))
    }
  }

  /**
   * A new admin connection appears.
   */
  private onAdminConnection(webSocket: WebSocket): void {
    for (const dto of this.chargingStationModels) {
      this.sendToUiSingle(webSocket, new CsmsToUiMsg(CsmsToUiCmdEnum.csState, dto))
    }
    this.sendToUiSingle(webSocket, new CsmsToUiMsg(CsmsToUiCmdEnum.csList, this.chargingStationModels))
    this.sendToUiSingle(webSocket, new CsmsToUiMsg(CsmsToUiCmdEnum.rfidList, this.rfids))

    webSocket.onclose = (): void => {
      // nothing to do
    }

    webSocket.onerror = (err: any): void => {
      this.logger.error('Error' + err)
    }

    webSocket.onmessage = (msg: WebSocket.MessageEvent): void => {
      const data: UiToCsmsMsg = JSON.parse(msg.data.toString())
      this.logger.info(`Admin UI | ${data.cmd} | ${data.subCmd}`)
      this.adminOnMessage(data)
    }
  }

  /**
   * Incoming Message on admin socket
   */
  private adminOnMessage(data: UiToCsmsMsg): void {
    switch (data.cmd) {
      case UiToCsmsCmdEnum.rfidCmd:
        {
          const payload = data.payload as RfidCardModel
          this.handleAdminRfidCmd(data.subCmd as UiToCsmsUserSubCmdEnum, payload)
          this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.rfidList, this.rfids))
          this.dataStorage.set('rfids', this.rfids)
        }
        break
      case UiToCsmsCmdEnum.csCmd:
        {
          const payload = data.payload as ChargingStationModel
          this.handleAdminCsCmd(data.subCmd as UiToCsmsUserSubCmdEnum, payload)
          this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csList, this.chargingStationModels))
          this.dataStorage.set('chargingStations', this.chargingStationModels)
        }
        break
      case UiToCsmsCmdEnum.csAction:
        {
          const payload = data.payload as string
          const cs = this.chargingStations.find((x) => (x.model.uniqueIdentifier = payload))
          if (cs) {
            this.handleAdminCsAction(data.subCmd as UiToCsmsCsSubCmdEnum, cs)
          }
        }
        break
    }
  }

  /**
   * Stop the server. Closes all socket connections and save config.
   */
  public stopServer(): void {
    if (this.server) {
      if (this.wssChargingStations) {
        this.wssChargingStations.clients.forEach((x) => x.terminate())
      }
      if (this.wssAdmin) {
        this.wssAdmin.clients.forEach((x) => x.terminate())
      }
      this.server.close()
    }

    // Save data
    this.dataStorage.set('chargingStations', this.chargingStationModels)
    this.dataStorage.set('rfids', this.rfids)

    this.logger.info(`WebSocketServer stopped`)
  }

  /**
   * Handler for an admin charging station command.
   */
  private handleAdminCsCmd(subCmd: UiToCsmsUserSubCmdEnum, payload: ChargingStationModel): void {
    switch (subCmd) {
      case UiToCsmsUserSubCmdEnum.edit:
        {
          const cs = this.chargingStationModels.find((x) => x.id === payload.id)
          if (cs) {
            cs.uniqueIdentifier = payload.uniqueIdentifier
            cs.username = payload.username
            cs.enabled = payload.enabled
            if (payload.enabled) {
              cs.failedLogins = 0
            }
            // Passwort wird nur aktualisiert, wenn auch von der UI eines gesendet wurde.
            if (payload.passwordHash) {
              cs.passwordHash = payload.passwordHash
            }
            this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csState, payload))
          }
        }
        break
      case UiToCsmsUserSubCmdEnum.delete:
        this.chargingStationModels = this.chargingStationModels.filter((x) => x.id !== payload.id)
        this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csState, payload))
        break
      case UiToCsmsUserSubCmdEnum.add:
        {
          const user = this.chargingStationModels.find((x) => x.id === payload.id)
          if (!user) {
            this.chargingStationModels.push(payload)
            this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csState, payload))
          }
        }
        break
    }
  }

  /**
   * Handler for an admin rfid management command.
   */
  private handleAdminRfidCmd(subCmd: UiToCsmsUserSubCmdEnum, payload: RfidCardModel): void {
    {
      switch (subCmd) {
        case UiToCsmsUserSubCmdEnum.edit:
          {
            const user = this.rfids.find((x) => x.id === payload.id)
            if (user) {
              Object.assign(user, payload)
            }
          }
          break
        case UiToCsmsUserSubCmdEnum.delete:
          this.rfids = this.rfids.filter((x) => x.id !== payload.id)
          break
        case UiToCsmsUserSubCmdEnum.add:
          {
            const user = this.rfids.find((x) => x.id === payload.id)
            if (!user) {
              this.rfids.push(payload)
            }
          }
          break
      }
    }
  }

  /**
   * Handler for an admin charging station action.
   */
  private handleAdminCsAction(subCmd: UiToCsmsCsSubCmdEnum, cs: ChargingStation): void {
    switch (subCmd) {
      case UiToCsmsCsSubCmdEnum.sendSetVariables:
        cs.sendSetVariables(
          new SetVariablesRequestDto([
            new SetVariableDataDto('attributeX1', new ComponentDto('componentX'), new VariableDto('variableX1')),
            new SetVariableDataDto('attributeX2', new ComponentDto('componentX'), new VariableDto('variableX2')),
            new SetVariableDataDto('attributeX3', new ComponentDto('componentX'), new VariableDto('variableX3')),
            new SetVariableDataDto('attributeX4', new ComponentDto('componentX'), new VariableDto('variableX4')),
          ]),
        )
        break
      case UiToCsmsCsSubCmdEnum.sendGetBaseReport:
        cs.sendGetBaseReport(new GetBaseReportRequestDto(1, ReportBaseEnum.FullInventory))
        break
      case UiToCsmsCsSubCmdEnum.sendGetVariables:
        cs.sendGetVariables(
          new GetVariablesRequestDto([
            new GetVariableDataDto(new ComponentDto('componentX'), new VariableDto('variableX1')),
            new GetVariableDataDto(new ComponentDto('componentX'), new VariableDto('variableX2')),
            new GetVariableDataDto(new ComponentDto('componentX'), new VariableDto('variableX3')),
          ]),
        )
        break
      case UiToCsmsCsSubCmdEnum.sendChangeAvailability:
        cs.sendChangeAvailability(new ChangeAvailabilityRequestDto(OperationalStatusEnum.Operative))
        break
      case UiToCsmsCsSubCmdEnum.sendRequestReset:
        cs.sendRequestReset(new ResetRequestDto(ResetEnum.Immediate))
        break
      case UiToCsmsCsSubCmdEnum.sendDataTransfer:
        cs.sendDataTransfer(new DataTransferRequestDto('vendorIdX'))
        break
    }
  }

  private handleChargingStationLogin(uniqueIdentifier: string, username: string, password: string): ChargingStationModel | undefined {
    // Try to find CS
    const model = this.chargingStationModels.find((x) => x.uniqueIdentifier === uniqueIdentifier)
    // if not found, go back
    if (!model) {
      return
    }

    // if CS is disabled or credentials invalid, increase failed login attempts and go back
    if (!model.enabled || model.username !== username || !verifyPassword(password, model.passwordHash)) {
      model.failedLogins += 1
      if (model.failedLogins >= 5) {
        model.enabled = false
      }
      // Save state
      this.dataStorage.set('chargingStations', this.chargingStationModels)
      // Update admin UI
      this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csState, model))
      this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csList, this.chargingStationModels))
      return
    }

    // Everything is fine, reset failed login attempts
    model.failedLogins = 0
    return model
  }
}
