import WebSocket from 'ws'
import { WebSocketServerBase } from '../src/web-socket-server-base'
import { IncomingMessage } from 'http'
import { ChargingStation } from '../src/charging-station'

export class WebSocketServerMock extends WebSocketServerBase {
  private server: WebSocket.Server | undefined

  public start(): void {
    this.server = new WebSocket.Server({
      host: 'localhost',
      port: 3001,
    })
    this.server.on('connection', (socket: WebSocket, request: IncomingMessage) =>
      this.onConnection(socket, request, new ChargingStation('Test', 'Test', 'Test')),
    )
  }

  public stop(): void {
    if (this.server) {
      this.server.close()
    }
  }
}
