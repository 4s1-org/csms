import { Logger } from '@yellowgarbagebag/common-lib'
import { DataStorage } from './config/data-storage'
import { IDataStorageSchema } from './config/i-data-store-schema'
import { WebSocketServer } from './web-socket-server'

const logger = new Logger('root')

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
server.startServer()

async function closeGracefully(signal: number): Promise<void> {
  logger.warn(`Received signal to terminate: ${signal}`)
  server.stopServer()
  process.exit()
}

process.on('SIGINT', closeGracefully)
process.on('SIGTERM', closeGracefully)

process.on('uncaughtException', (err) => {
  logger.error(`Uncaught Exception: ${err.message}`)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled rejection at \n' + promise + `\n reason: ${reason}`)
  process.exit(1)
})
