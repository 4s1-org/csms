import { Logger } from '@yellowgarbagebag/common-lib'
import { DataStorage } from './config/data-storage'
import { IDataStorageSchema } from './config/i-data-store-schema'
import { WebSocketServer } from './web-socket-server'
import dotenv from 'dotenv'
dotenv.config()

const logger = new Logger('Core')

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

function closeGracefully(signal: string): void {
  logger.warn(`Received signal to terminate: ${signal}`)
  server.stopServer()
  logger.info('gracefull shutdown successfully')
  process.exit()
}

process.on('SIGINT', (signal: string) => closeGracefully(signal))
process.on('SIGTERM', (signal: string) => closeGracefully(signal))

process.on('uncaughtException', (err) => {
  logger.error(`Uncaught Exception: ${err.message}`)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled rejection at \n' + promise + `\n reason: ${reason}`)
  process.exit(1)
})
