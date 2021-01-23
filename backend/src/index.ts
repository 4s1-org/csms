import { WebSocketServer } from './web-socket-server'

process.on('uncaughtException', (err) => {
  console.log(`Uncaught Exception: ${err.message}`)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled rejection at ', promise, `reason: ${reason}`)
  process.exit(1)
})

const server = new WebSocketServer('127.0.0.1', 3000)
try {
  server.start()
} catch (err) {
  server.stop()
  process.exit(1)
}
