import { DataStorage } from './config/data-storage'
import { IDataStorageSchema } from './config/i-data-store-schema'
import { WebSocketServer } from './web-socket-server'

process.on('uncaughtException', (err) => {
  console.log(`Uncaught Exception: ${err.message}\n${err.stack}`)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled rejection at ', promise, `reason: ${reason}`)
  process.exit(1)
})

// Config
const dataStorage = new DataStorage<IDataStorageSchema>('csms-server')
if (process.env.port) {
  dataStorage.set('port', +process.env.port)
}
if (!dataStorage.has('chargingStationModels')) {
  dataStorage.set('chargingStationModels', [])
}

// Create server
const server = new WebSocketServer(dataStorage)

process.on('SIGINT', () => server.stopServer())
try {
  server.startServer()
} catch (err) {
  server.stopServer()
  console.log(err)
  process.exit(1)
}
