import { WebSocketClient } from './web-socket-client'

process.on('uncaughtException', (err) => {
  console.log(`Uncaught Exception: ${err.message}\n${err.stack}`)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled rejection at ', promise, `reason: ${reason}`)
  process.exit(1)
})

new WebSocketClient('LS001').run()
//new WebSocketClient('LS002').run()
