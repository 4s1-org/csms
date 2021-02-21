#!/usr/bin/env node

import { DataStorage } from './config/data-storage'
import { IDataStorageSchema } from './config/i-data-store-schema'
import { hashPassword } from './config/password'
import { Command } from 'commander'
import { ChargingStationModel, ChargingStationState, SerializationHelper } from '@yellowgarbagebag/csms-lib'

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
dataStorage.set('devMode', true)

if (dataStorage.has('chargingStationModels')) {
  const models = dataStorage
    .get('chargingStationModels')
    .map((x) => SerializationHelper.deserialize(ChargingStationModel, x))

  // Wenn Es keine Ladesäule gibt, lege sie an
  if (!models.find((x) => x.uniqueIdentifier === 'LS001')) {
    const cs = new ChargingStationModel('LS001')
    cs.username = 'LS001'
    cs.passwordHash = hashPassword('test')
    cs.state = ChargingStationState.Offline
    models.push(cs)

    dataStorage.set(
      'chargingStationModels',
      models.map((x) => SerializationHelper.serialize(x, ['password'])),
    )
  }
}
