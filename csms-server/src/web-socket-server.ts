import WebSocket from 'ws'
import https from 'https'
import fs from 'fs'
import path from 'path'
import { IncomingHttpHeaders, IncomingMessage } from 'http'
import { TLSSocket } from 'tls'
import { fromBase64, Logger } from '@yellowgarbagebag/common-lib'
import { ChargingStationModel, SerializationHelper, ChargingStationGroupFlag } from '@yellowgarbagebag/csms-lib'
import { DataStorage } from './config/data-storage'
import { IDataStorageSchema } from './config/i-data-store-schema'
import { verifyPassword } from './config/password'
import { ChargingStation } from './charging-station'
import { WsClient } from './ws-client'

type HeaderType = {
  secWebsocketKey: string
  secWebsocketProtocol: string[]
}

export class WebSocketServer {
  protected logger: Logger = new Logger('Server')
  private server: https.Server | undefined
  private csSockets: Set<WebSocket> = new Set<WebSocket>()
  private csTlsSockets: Set<TLSSocket> = new Set<TLSSocket>()
  private adminSockets: Set<WebSocket> = new Set<WebSocket>()
  private adminTlsSockets: Set<TLSSocket> = new Set<TLSSocket>()
  private chargingStationModels: ChargingStationModel[]

  constructor(private readonly dataStorage: DataStorage<IDataStorageSchema>) {
    this.logger.info(`Configfile: ${dataStorage.path}`)

    this.chargingStationModels = dataStorage
      .get('chargingStationModels')
      .map((x) => SerializationHelper.deserialize(ChargingStationModel, x))
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

    this.server = https
      .createServer({
        cert: fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'certificate.crt')),
        key: fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'certificate.key')),
      })
      .on('upgrade', (request: IncomingMessage, tlsSocket: TLSSocket, head: Buffer): void => {
        this.logger.info('upgrade connection')
        const header = this.parseHeaders(request.headers)
        this.logger.info(`Client connected: ${header.secWebsocketKey} [${header.secWebsocketProtocol}]`)

        const { username, password } = this.getCredentials(request, header)
        const myURL = new URL(request.url || '', 'http://localhosts') // Domain ist egal

        if (myURL.pathname.startsWith('/ocpp/')) {
          // Charging Station
          this.logger.info('upgrade connection for ChargingStation')
          const uniqueIdentifier = myURL.pathname.split('/')[2]

          const model = this.chargingStationModels.find((x) => x.uniqueIdentifier === uniqueIdentifier)
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
    const cs = new ChargingStation(model, client)

    cs.connect()
    this.sendAdminStatusToAll(cs.model)

    socket.onclose = (): void => {
      cs.disconnect()
      this.csSockets.delete(socket)
      this.csTlsSockets.delete(tlsSocket)
      this.sendAdminStatusToAll(cs.model)
    }

    socket.onerror = (err: any): void => {
      this.logger.error('Error' + err)
    }

    socket.onmessage = (data: WebSocket.MessageEvent): void => {
      client.onMessage(data.data, cs)
      this.sendAdminStatusToAll(cs.model)
    }
  }

  private sendAdminStatusToAll(model: ChargingStationModel): void {
    for (const socket of this.adminSockets) {
      this.sendAdminStatusToSingle(socket, model)
    }
  }

  private sendAdminStatusToSingle(socket: WebSocket, model: ChargingStationModel): void {
    if (socket.OPEN) {
      socket.send(SerializationHelper.serialize(model, [ChargingStationGroupFlag.UiOnly]))
    }
  }

  private onAdminConnection(socket: WebSocket, tlsSocket: TLSSocket): void {
    this.adminSockets.add(socket)
    this.adminTlsSockets.add(tlsSocket)

    for (const cs of this.chargingStationModels) {
      this.sendAdminStatusToSingle(socket, cs)
    }

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
    this.dataStorage.set(
      'chargingStationModels',
      this.chargingStationModels.map((x) => SerializationHelper.serialize(x, [ChargingStationGroupFlag.ServerOnly])),
    )

    this.logger.info(`WebSocketServer stopped`)
  }
}
