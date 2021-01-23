import WebSocket from 'ws'
import fs from 'fs'
import path from 'path'
import https from 'https'
import { WebSocketServerBase } from './web-socket-server-base'
import { IncomingMessage } from 'http'

export class WebSocketServer extends WebSocketServerBase {
  private server: https.Server | undefined

  constructor(public readonly port: number = 3000) {
    super()
  }

  public start(): void {
    this.server = https.createServer(
      {
        cert: fs.readFileSync(path.join(__dirname, '..', 'third-party', 'certificates', 'localhost-chain.pem')),
        key: fs.readFileSync(path.join(__dirname, '..', 'third-party', 'certificates', 'localhost.key')),
      },
      (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write('Server is running!')
        res.end()
      },
    )

    const wss = new WebSocket.Server({
      server: this.server,
    })
    wss.on('connection', (socket: WebSocket, request: IncomingMessage) => this.onConnection(socket, request))

    this.server.listen(this.port)
    this.logger.info(`WebSocketServer is running on port ${this.port}`)
  }

  public stop(): void {
    if (this.server) {
      this.server.close()
    }
    this.logger.info(`WebSocketServer stopped`)
  }
}
