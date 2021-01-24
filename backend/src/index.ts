import { WebSocketServer } from './web-socket-server'

process.on('uncaughtException', (err) => {
  console.log(`Uncaught Exception: ${err.message}\n${err.stack}`)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled rejection at ', promise, `reason: ${reason}`)
  process.exit(1)
})

const server = new WebSocketServer(3000)
try {
  server.startServer()
} catch (err) {
  server.stopServer()
  console.log(err)
  process.exit(1)
}
