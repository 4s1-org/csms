#!/usr/bin/env node

import { DataStorage } from './config/data-storage'
import { IDataStorageSchema } from './config/i-data-store-schema'
import { hashPassword } from './config/password'
import { Command } from 'commander'
import {
  ChargingStationGroupFlag,
  ChargingStationModel,
  ColorState,
  SerializationHelper,
} from '@yellowgarbagebag/csms-lib'

const program = new Command()
program
  .version('0.0.1')
  .description('Setup for CSMS server')
  .usage('npm run setup -- -u foo -p bar -o 3000')
  .requiredOption('-u, --username [type]', 'Admin username')
  .requiredOption('-p, --password [type]', 'Admin password')
  .requiredOption('-o, --port [type]', 'Server port')

if (!process.argv.slice(2).length) {
  program.outputHelp()
  process.exit(0)
}

program.parse(process.argv)

const options = program.opts()

const dataStorage = new DataStorage<IDataStorageSchema>('csms-server')
dataStorage.set('port', +options.port)
dataStorage.set('adminCredentials', { username: options.username, passwordHash: hashPassword(options.password) })

dataStorage.set('validUsers', [
  { name: 'Anton Aarbinger', rfid: 'aaa' },
  { name: 'Bernd Brotzeitholer', rfid: 'bbb' },
])

if (!dataStorage.has('chargingStationModels')) {
  dataStorage.set('chargingStationModels', [])
}
const models = dataStorage
  .get('chargingStationModels')
  .map((x) => SerializationHelper.deserialize(ChargingStationModel, x))

function createChargeStation(uniqueIdentifier: string): void {
  // Wenn Es keine Ladesäule gibt, lege sie an
  if (!models.find((x) => x.uniqueIdentifier === uniqueIdentifier)) {
    const cs = new ChargingStationModel(uniqueIdentifier)
    cs.username = uniqueIdentifier
    cs.passwordHash = hashPassword('test')
    cs.state = ColorState.Red
    models.push(cs)

    dataStorage.set(
      'chargingStationModels',
      models.map((model) => SerializationHelper.serialize(model, [ChargingStationGroupFlag.ServerOnly])),
    )
  }
}

createChargeStation('LS001')
createChargeStation('LS002')
createChargeStation('LS003')
createChargeStation('LS004')
createChargeStation('LS005')
createChargeStation('LS006')
createChargeStation('LS007')
