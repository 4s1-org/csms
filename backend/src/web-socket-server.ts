import WebSocket from 'ws'
import fs from 'fs'
import path from 'path'
import https from 'https'
import { WebSocketServerBase } from './web-socket-server-base'
import { IncomingMessage } from 'http'
import { TLSSocket } from 'tls'

export class WebSocketServer extends WebSocketServerBase {
  private server: https.Server | undefined

  constructor(public readonly port: number = 3000) {
    super()
  }

  public start(): void {
    this.server = https.createServer({
      cert: fs.readFileSync(path.join(__dirname, '..', 'third-party', 'certificates', 'localhost-chain.pem')),
      key: fs.readFileSync(path.join(__dirname, '..', 'third-party', 'certificates', 'localhost.key')),
    })
    const wss = new WebSocket.Server({
      server: this.server,
      //path: '/ocpp',
    })

    wss.on('connection', (socket: WebSocket, request: IncomingMessage) => {
      this.onConnection(socket, request)
    })

    this.server.on('upgrade', (request: IncomingMessage, socket: TLSSocket): void => {
      const authenticated: boolean = this.authenticate(request)

      if (!authenticated) {
        socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n')
        socket.destroy()
        return
      }
    })

    this.server.listen(this.port)
    this.logger.info(`WebSocketServer is running on port ${this.port}`)
  }

  public stop(): void {
    if (this.server) {
      this.server.close()
    }
    this.logger.info(`WebSocketServer stopped`)
  }

  private authenticate(request: IncomingMessage): boolean {
    return true
  }
}
