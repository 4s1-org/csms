import WebSocket from 'ws'
import { WebSocketServerBase } from '../src/web-socket-server-base'
import { IncomingMessage } from 'http'
import { ChargingStation } from '../src/charging-station'

export class WebSocketServerMock extends WebSocketServerBase {
  private server: WebSocket.Server | undefined

  constructor(public readonly port: number = 3000) {
    super()
  }

  public start(): void {
    this.server = new WebSocket.Server({
      host: 'localhost',
      port: this.port,
    })
    this.server.on('connection', (socket: WebSocket, request: IncomingMessage) =>
      this.onConnection(socket, request, new ChargingStation('TEST')),
    )

    this.logger.info(`WebSocketServer is running on port ${this.port}`)
  }

  public stop(): void {
    if (this.server) {
      this.server.close()
    }
    this.logger.info(`WebSocketServer stopped`)
  }
}
