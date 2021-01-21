import { WebSocketServer } from './web-socket-server'

const server = new WebSocketServer('127.0.0.1', 3000)
try {
  server.start()
} catch (err) {
  server.stop()
  process.exit(1)
}
