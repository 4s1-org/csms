import WebSocket from 'ws'
import fs from 'fs'
import path from 'path'
import https from 'https'
import { IncomingMessage } from 'http'
import { TLSSocket } from 'tls'
import { v4 as uuid } from 'uuid'
import { ChargingStation } from './charging-station'
import {
  OcppBaseMessageDto,
  handleIncomingMessage,
  RequestBaseDto,
  actionDtoMapping,
  OcppRequestMessageDto,
} from '@yellowgarbagebag/ocpp-lib'
import { Logger } from '@yellowgarbagebag/common-lib'
import { DataProvider } from './data-provider'
import { SerializationHelper } from '@yellowgarbagebag/csms-lib'

export class WebSocketServer {
  protected logger: Logger = new Logger('Core')
  private server: https.Server | undefined
  private csSockets: Set<WebSocket> = new Set<WebSocket>()
  private csTlsSockets: Set<TLSSocket> = new Set<TLSSocket>()
  private adminSockets: Set<WebSocket> = new Set<WebSocket>()
  private adminTlsSockets: Set<TLSSocket> = new Set<TLSSocket>()

  constructor(public readonly port: number = 3000) {
    // nothing to do
  }

  public startServer(): void {
    DataProvider.instance.load()

    const wssChargingStations = new WebSocket.Server({
      noServer: true,
    }).on('connection', (socket: WebSocket, tlsSocket: TLSSocket, cs: ChargingStation): void =>
      this.onChargingStationConnection(socket, tlsSocket, cs),
    )

    const wssAdmin = new WebSocket.Server({
      noServer: true,
    }).on('connection', (socket: WebSocket, tlsSocket: TLSSocket): void => this.onAdminConnection(socket, tlsSocket))

    this.server = https
      .createServer({
        cert: fs.readFileSync(path.join(__dirname, '..', 'third-party', 'certificates', 'localhost.crt')),
        key: fs.readFileSync(path.join(__dirname, '..', 'third-party', 'certificates', 'localhost.key')),
      })
      .on('upgrade', (request: IncomingMessage, tlsSocket: TLSSocket, head: Buffer): void => {
        const socketId = request.headers['sec-websocket-key']
        this.logger.info(`Client connected: ${socketId}`)

        const [username, password] = this.getCredentials(request)
        const baseURL = `https://${request.headers.host}/`
        const myURL = new URL(request.url || '', baseURL)

        if (myURL.pathname.startsWith('/ocpp/')) {
          // Charging Station
          const uniqueIdentifier = myURL.pathname.split('/')[2]

          const cs: ChargingStation | undefined = this.authenticateChargingStation(uniqueIdentifier, username, password)

          if (!cs) {
            return this.send401(tlsSocket)
          }

          wssChargingStations.handleUpgrade(request, tlsSocket, head, (socket: WebSocket): void => {
            wssChargingStations.emit('connection', socket, tlsSocket, cs)
          })
        } else if (myURL.pathname.startsWith('/admin')) {
          // Admin
          if (username !== 'admin' || password !== 'admin') {
            return this.send401(tlsSocket)
          }

          wssAdmin.handleUpgrade(request, tlsSocket, head, (socket: WebSocket): void => {
            wssAdmin.emit('connection', socket, tlsSocket)
          })
        } else {
          return this.send401(tlsSocket)
        }
      })

    this.server.listen(this.port)
    this.logger.info(`WebSocketServer is running on port ${this.port}`)
  }

  private onChargingStationConnection(socket: WebSocket, tlsSocket: TLSSocket, cs: ChargingStation): void {
    this.csSockets.add(socket)
    this.csTlsSockets.add(tlsSocket)
    cs.connect()
    this.sendAdminStatusToAll()

    socket.onclose = (): void => {
      cs.disconnect()
      this.csSockets.delete(socket)
      this.csTlsSockets.delete(tlsSocket)
      this.sendAdminStatusToAll()
    }

    socket.onerror = (err: any): void => {
      this.logger.error('Error' + err)
    }

    socket.onmessage = (msg: WebSocket.MessageEvent): void => {
      const result: OcppBaseMessageDto | undefined = handleIncomingMessage(cs, msg.data)
      if (result) {
        socket.send(result.toMessageString())
      }
      this.sendAdminStatusToAll()
    }
  }

  private sendAdminStatusToAll(): void {
    for (const socket of this.adminSockets) {
      this.sendAdminStatusToSingle(socket)
    }
  }

  private sendAdminStatusToSingle(socket: WebSocket): void {
    if (socket.OPEN) {
      socket.send(SerializationHelper.serialize(DataProvider.instance.getAllModels()))
    }
  }

  private onAdminConnection(socket: WebSocket, tlsSocket: TLSSocket): void {
    this.adminSockets.add(socket)
    this.adminTlsSockets.add(tlsSocket)

    this.sendAdminStatusToSingle(socket)

    socket.onclose = (): void => {
      this.adminSockets.delete(socket)
      this.adminTlsSockets.delete(tlsSocket)
    }

    socket.onerror = (err: any): void => {
      this.logger.error('Error' + err)
    }

    socket.onmessage = (msg: WebSocket.MessageEvent): void => {
      // ToDo
    }
  }

  private getCredentials(request: IncomingMessage): string[] {
    let value
    if (request.headers.authorization) {
      value = request.headers.authorization
    } else if (request.headers.cookie && request.headers.cookie.startsWith('X-Authorization=')) {
      value = `Basic ${request.headers.cookie.split('=')[1]}=`
    }

    const b64auth = (value || '').split(' ')[1] || ''
    return Buffer.from(b64auth, 'base64').toString().split(':')
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
    this.logger.info(`WebSocketServer stopped`)
    DataProvider.instance.save()
  }

  // ToDo: https://gitlab.com/YellowGarbageBag/csms/-/issues/56
  private sendRequest(socket: WebSocket, cs: ChargingStation, payload: RequestBaseDto): void {
    const mapping = actionDtoMapping.find((x) => payload instanceof x.requestDto)
    if (!mapping) {
      throw new Error('No mapping found')
    }

    const msg = new OcppRequestMessageDto(uuid(), mapping.action, payload)
    cs.logger.info(`Outgoing Request | ${msg.action} | ${msg.messageId}`)
    cs.logger.debug('Send', msg)
    if (socket && socket.OPEN) {
      socket.send(msg.toMessageString())
      cs.addToSendList(msg)
    }
  }

  private authenticateChargingStation(
    uniqueIdentifier: string,
    username: string,
    password: string,
  ): ChargingStation | undefined {
    const model = DataProvider.instance.findChargingStationModel(uniqueIdentifier)
    if (model) {
      const cs = new ChargingStation(model)
      if (cs.checkCredentials(username, password)) {
        return cs
      }
    }
    return undefined
  }
}
