import WebSocket from 'ws'
import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { URL } from 'url'
import { IncomingHttpHeaders, IncomingMessage } from 'http'
import { TLSSocket } from 'tls'
import { fromBase64, Logger, verifyPassword } from '@yellowgarbagebag/common-lib'
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
import { DataStorage } from './config/data-storage'
import { IDataStorageSchema } from './config/i-data-store-schema'
import { ChargingStation } from './charging-station'
import { WsClient } from './ws-client'
import { ProcessEnv } from './process-env'
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

type HeaderType = {
  secWebsocketKey: string
  secWebsocketProtocol: string[]
}

export class WebSocketServer {
  protected logger: Logger = new Logger('Server', ProcessEnv.LOG_LEVEL)
  private server: https.Server | http.Server | undefined
  private csSockets: Set<WebSocket> = new Set<WebSocket>()
  private csTlsSockets: Set<TLSSocket> = new Set<TLSSocket>()
  private adminSockets: Set<WebSocket> = new Set<WebSocket>()
  private adminTlsSockets: Set<TLSSocket> = new Set<TLSSocket>()
  private chargingStationModels: ChargingStationModel[]
  private chargingStations: ChargingStation[] = []
  private rfids: RfidCardModel[]

  constructor(private readonly dataStorage: DataStorage<IDataStorageSchema>) {
    this.logger.info(`Configfile: ${dataStorage.path}`)

    this.chargingStationModels = dataStorage.get('chargingStations') || []
    for (const model of this.chargingStationModels) {
      model.state = ColorStateEnum.Red
      model.evseList = []
    }
    this.rfids = dataStorage.get('rfids') || []
  }

  public startServer(): void {
    const wssChargingStations = new WebSocket.Server({
      noServer: true,
    }).on('connection', (socket: WebSocket, tlsSocket: TLSSocket, model: ChargingStationModel): void => {
      this.logger.info('ChargingStation-Socket-Connection established')
      this.onChargingStationConnection(socket, tlsSocket, model)
    })

    const wssAdmin = new WebSocket.Server({
      noServer: true,
    }).on('connection', (socket: WebSocket, tlsSocket: TLSSocket): void => {
      this.logger.info('Admin-Socket-Connection established')
      this.onAdminConnection(socket, tlsSocket)
    })

    if (this.dataStorage.get('https') === false) {
      this.logger.info('Use http')
      this.server = http.createServer()
    } else {
      this.logger.info('Use https')
      this.server = https.createServer({
        cert: fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'certificate.crt')),
        key: fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'certificate.key')),
      })
    }
    this.server.on('upgrade', (request: IncomingMessage, tlsSocket: TLSSocket, head: Buffer): void => {
      this.logger.info('upgrade connection')
      const header = this.parseHeaders(request.headers)
      this.logger.info(`Client connected: ${header.secWebsocketKey} [${header.secWebsocketProtocol}]`)

      const { username, password } = this.getCredentials(request, header)
      const myURL = new URL(request.url || '', 'http://localhosts') // Domain ist egal

      if (myURL.pathname.startsWith('/ocpp/')) {
        // Charging Station
        this.logger.info('upgrade connection for ChargingStation')
        const uniqueIdentifier = myURL.pathname.split('/')[2]

        const model = this.chargingStationModels.find((x) => x.uniqueIdentifier === uniqueIdentifier && x.enabled)
        if (!model || model.username !== username || !verifyPassword(password, model.passwordHash)) {
          this.logger.warn(`Invalid login from ${uniqueIdentifier}`)
          return this.send401(tlsSocket)
        }

        wssChargingStations.handleUpgrade(request, tlsSocket, head, (socket: WebSocket): void => {
          wssChargingStations.emit('connection', socket, tlsSocket, model)
        })
      } else if (myURL.pathname.startsWith('/admin')) {
        // Admin
        this.logger.info('upgrade connection for Admin')
        const adminCredentials = this.dataStorage.get('adminCredentials')
        if (username !== adminCredentials.username || !verifyPassword(password, adminCredentials.passwordHash)) {
          return this.send401(tlsSocket)
        }

        wssAdmin.handleUpgrade(request, tlsSocket, head, (socket: WebSocket): void => {
          wssAdmin.emit('connection', socket, tlsSocket)
        })
      } else {
        return this.send401(tlsSocket)
      }
    })

    const port = this.dataStorage.get('port')
    this.server.listen(port)
    this.logger.info(`WebSocketServer is running on port ${port}`)
  }

  private parseHeaders(headers: IncomingHttpHeaders): HeaderType {
    const res: HeaderType = {
      secWebsocketKey: '',
      secWebsocketProtocol: [],
    }

    if (headers['sec-websocket-key']) {
      res.secWebsocketKey = headers['sec-websocket-key']
    }
    if (headers['sec-websocket-protocol']) {
      const parts = headers['sec-websocket-protocol'].split(', ')
      res.secWebsocketProtocol = parts
    }

    return res
  }

  private onChargingStationConnection(socket: WebSocket, tlsSocket: TLSSocket, model: ChargingStationModel): void {
    this.csSockets.add(socket)
    this.csTlsSockets.add(tlsSocket)

    const client = new WsClient(model.uniqueIdentifier, socket)
    const cs = new ChargingStation(model, client, this.dataStorage.get('rfids'))
    this.chargingStations.push(cs)

    cs.connect()
    this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csState, model))

    socket.onclose = (): void => {
      cs.disconnect()
      this.csSockets.delete(socket)
      this.csTlsSockets.delete(tlsSocket)
      this.chargingStations = this.chargingStations.filter((x) => x.model.uniqueIdentifier !== cs.model.uniqueIdentifier)
      this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csState, model))
    }

    socket.onerror = (err: any): void => {
      this.logger.error('Error' + err)
    }

    socket.onmessage = (data: WebSocket.MessageEvent): void => {
      client.onMessage(data.data, cs)
      this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csState, model))
    }
  }

  private sendToUiAll(msg: CsmsToUiMsg): void {
    for (const socket of this.adminSockets) {
      this.sendToUiSingle(socket, msg)
    }
  }

  private sendToUiSingle(socket: WebSocket, msg: CsmsToUiMsg): void {
    if (socket.OPEN) {
      socket.send(JSON.stringify(msg))
    }
  }

  private onAdminConnection(socket: WebSocket, tlsSocket: TLSSocket): void {
    this.adminSockets.add(socket)
    this.adminTlsSockets.add(tlsSocket)

    for (const dto of this.chargingStationModels) {
      this.sendToUiSingle(socket, new CsmsToUiMsg(CsmsToUiCmdEnum.csState, dto))
    }
    this.sendToUiSingle(socket, new CsmsToUiMsg(CsmsToUiCmdEnum.csList, this.chargingStationModels))
    this.sendToUiSingle(socket, new CsmsToUiMsg(CsmsToUiCmdEnum.rfidList, this.rfids))

    socket.onclose = (): void => {
      this.adminSockets.delete(socket)
      this.adminTlsSockets.delete(tlsSocket)
    }

    socket.onerror = (err: any): void => {
      this.logger.error('Error' + err)
    }

    socket.onmessage = (msg: WebSocket.MessageEvent): void => {
      const data: UiToCsmsMsg = JSON.parse(msg.data.toString())

      this.logger.info(`Admin UI | ${data.cmd} | ${data.subCmd}`)

      switch (data.cmd) {
        case UiToCsmsCmdEnum.rfidCmd:
          {
            const payload = data.payload as RfidCardModel

            switch (data.subCmd) {
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

            this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.rfidList, this.rfids))
            this.dataStorage.set('rfids', this.rfids)
          }
          break
        case UiToCsmsCmdEnum.csCmd:
          {
            const payload = data.payload as ChargingStationModel

            switch (data.subCmd) {
              case UiToCsmsUserSubCmdEnum.edit:
                {
                  const cs = this.chargingStationModels.find((x) => x.id === payload.id)
                  if (cs) {
                    cs.uniqueIdentifier = payload.uniqueIdentifier
                    cs.username = payload.username
                    cs.enabled = payload.enabled
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

            this.sendToUiAll(new CsmsToUiMsg(CsmsToUiCmdEnum.csList, this.chargingStationModels))
            this.dataStorage.set('chargingStations', this.chargingStationModels)
          }
          break
        case UiToCsmsCmdEnum.csAction:
          {
            const payload = data.payload as string
            const cs = this.chargingStations.find((x) => (x.model.uniqueIdentifier = payload))

            if (!cs) {
              return
            }

            switch (data.subCmd) {
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
          break
      }
    }
  }

  private getCredentials(request: IncomingMessage, header: HeaderType): { username: string; password: string } {
    if (request.headers.authorization && request.headers.authorization.startsWith('Basic ')) {
      const b64auth = request.headers.authorization.substring(6)
      const parts = Buffer.from(b64auth, 'base64').toString().split(':') // cut "Basic "
      if (parts.length === 2) {
        return {
          username: parts[0],
          password: parts[1],
        }
      }
    } else if (header.secWebsocketProtocol.length > 0) {
      for (const protocol of header.secWebsocketProtocol) {
        if (protocol.startsWith('Auth.')) {
          const b64auth = protocol.substring(5) // cut "Auth."
          const parts = fromBase64(b64auth).split(':')
          if (parts.length === 2) {
            return {
              username: parts[0],
              password: parts[1],
            }
          }
        }
      }
    }

    this.logger.warn('No credentials found or invalid')
    return { username: '', password: '' }
  }

  private send401(tlsSocket: TLSSocket): void {
    this.logger.error(`Client not accepted`)
    tlsSocket.write('HTTP/1.1 401 Unauthorized\r\n\r\n')
    tlsSocket.destroy()
  }

  public stopServer(): void {
    if (this.server) {
      for (const socket of this.csTlsSockets) {
        socket.destroy()
      }
      for (const socket of this.csSockets) {
        socket.close()
      }
      this.server.close()
    }

    // Save data
    this.dataStorage.set('chargingStations', this.chargingStationModels)
    this.dataStorage.set('rfids', this.rfids)

    this.logger.info(`WebSocketServer stopped`)
  }
}
