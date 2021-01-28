import { ChargingStation } from './charging-station'
import { WebSocketClient } from './web-socket-client'

process.on('uncaughtException', (err) => {
  console.log(`Uncaught Exception: ${err.message}\n${err.stack}`)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled rejection at ', promise, `reason: ${reason}`)
  process.exit(1)
})

new WebSocketClient(new ChargingStation('LS001', 'LS001', 'test')).run()
//new WebSocketClient('LS002').run()
