import WebSocket from 'ws'
import fs from 'fs'
import path from 'path'
import https from 'https'
import { IncomingMessage } from 'http'
import { TLSSocket } from 'tls'
import { v4 as uuid } from 'uuid'
import { ChargingStation } from './charging-station'
import {
  Logger,
  OcppBaseMessageDto,
  handleIncomingMessage,
  RequestBaseDto,
  actionDtoMapping,
  OcppRequestMessageDto,
} from '@yellowgarbagebag/csms-shared'
import { DataProvider } from './data-provider'

export class WebSocketServer {
  protected logger: Logger = new Logger('Core')
  private server: https.Server | undefined
  private sockets: Set<WebSocket> = new Set<WebSocket>()
  private tlsSockets: Set<TLSSocket> = new Set<TLSSocket>()

  constructor(public readonly port: number = 3000) {
    // nothing to do
  }

  public startServer(): void {
    const wss = new WebSocket.Server({
      noServer: true,
      //path: '/ocpp',
    })
    wss.on(
      'connection',
      (socket: WebSocket, tlsSocket: TLSSocket, request: IncomingMessage, cs: ChargingStation): void => {
        this.sockets.add(socket)
        this.tlsSockets.add(tlsSocket)

        socket.onclose = (): void => {
          cs.disconnect()
          this.sockets.delete(socket)
          this.tlsSockets.delete(tlsSocket)
        }

        socket.onerror = (err: any): void => {
          this.logger.error('Error' + err)
        }

        socket.onmessage = (msg: WebSocket.MessageEvent): void => {
          const result: OcppBaseMessageDto | undefined = handleIncomingMessage(cs, msg.data)
          if (result) {
            socket.send(result.toMessageString())
          }
        }
      },
    )

    this.server = https.createServer({
      cert: fs.readFileSync(path.join(__dirname, '..', 'third-party', 'certificates', 'localhost.crt')),
      key: fs.readFileSync(path.join(__dirname, '..', 'third-party', 'certificates', 'localhost.key')),
    })

    this.server.on('upgrade', (request: IncomingMessage, tlsSocket: TLSSocket, head: Buffer): void => {
      const cs: ChargingStation | undefined = this.authenticate(request)

      if (!cs) {
        this.logger.error(`Client not accepted`)
        tlsSocket.write('HTTP/1.1 401 Unauthorized\r\n\r\n')
        tlsSocket.destroy()
        return
      }

      wss.handleUpgrade(request, tlsSocket, head, (socket: WebSocket, request: IncomingMessage): void => {
        wss.emit('connection', socket, tlsSocket, request, cs)
      })
    })

    this.server.listen(this.port)
    this.logger.info(`WebSocketServer is running on port ${this.port}`)
  }

  public stopServer(): void {
    if (this.server) {
      for (const socket of this.tlsSockets) {
        socket.destroy()
      }
      for (const socket of this.sockets) {
        socket.close()
      }
      this.server.close()
    }
    this.logger.info(`WebSocketServer stopped`)
  }

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

  private authenticate(request: IncomingMessage): ChargingStation | undefined {
    const socketId = request.headers['sec-websocket-key']
    this.logger.info(`Client connected: ${socketId}`)

    // ToDo: Das muss schöner werden
    const parts = request.url?.split('/')
    if (!parts || parts[1] !== 'ocpp' || parts.length !== 3) {
      this.logger.error(`Client URL is invalid "${request.url}"`)
      return undefined
    }

    const uniqueIdentifier = parts[2]
    const b64auth = (request.headers.authorization || '').split(' ')[1] || ''
    const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    const cs = DataProvider.instance.getChargingStation(uniqueIdentifier)
    if (cs && cs.checkCredentials(username, password)) {
      return cs
    } else {
      return undefined
    }
  }
}
