import WebSocket from 'ws'
import fs from 'fs'
import path from 'path'
import https from 'https'
import { IncomingMessage } from 'http'
import { TLSSocket } from 'tls'
import { ChargingStation } from './charging-station'
import { Logger, OcppBaseCallDto, handleIncomingCall } from '@yellowgarbagebag/csms-shared'
import { DataProvider } from './data-provider'

export class WebSocketServer {
  protected logger: Logger = new Logger('Core')
  private server: https.Server | undefined

  constructor(public readonly port: number = 3000) {
    // nothing to do
  }

  public startServer(): void {
    const wss = new WebSocket.Server({
      noServer: true,
      //path: '/ocpp',
    })
    wss.on('connection', (socket: WebSocket, request: IncomingMessage, cs: ChargingStation): void => {
      socket.onclose = (): void => {
        cs.disconnect()
      }

      socket.onerror = (err: any): void => {
        this.logger.error('Error' + err)
      }

      socket.onmessage = (msg: WebSocket.MessageEvent): void => {
        const result: OcppBaseCallDto | undefined = handleIncomingCall(cs, msg.data)
        if (result) {
          socket.send(result.toCallString())
        }
      }
    })

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
        wss.emit('connection', socket, request, cs)
      })
    })

    this.server.listen(this.port)
    this.logger.info(`WebSocketServer is running on port ${this.port}`)
  }

  public stopServer(): void {
    if (this.server) {
      this.server.close()
    }
    this.logger.info(`WebSocketServer stopped`)
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
