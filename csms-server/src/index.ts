import { ChargingStationModel, ChargingStationState, SerializationHelper } from '@yellowgarbagebag/csms-lib'
import { DataStorage } from './config/data-storage'
import { IDataStorageSchema } from './config/i-data-store-schema'
import { hashPassword } from './config/password'
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
if (!dataStorage.has('chargingStations')) {
  dataStorage.set('chargingStations', SerializationHelper.serialize([]))
}
if (dataStorage.get('devMode')) {
  let csList = SerializationHelper.deserializeArray(ChargingStationModel, dataStorage.get('chargingStations'))
  csList = csList.filter((x) => x.uniqueIdentifier === 'LS001')
  const cs = new ChargingStationModel('LS001')
  cs.username = 'LS001'
  cs.password = hashPassword('test')
  cs.state = ChargingStationState.Offline
  csList.push(cs)
  dataStorage.set('chargingStations', SerializationHelper.serialize(csList, ['hidden']))
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
