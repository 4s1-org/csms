#!/usr/bin/env node

import { DataStorage } from './config/data-storage'
import { IDataStorageSchema } from './config/i-data-store-schema'
import { hashPassword } from './config/password'
import { ChargingStationGroupFlag, ChargingStationModel, ColorState, SerializationHelper } from '@yellowgarbagebag/csms-lib'
import prompts, { PromptObject } from 'prompts'

async function main(): Promise<void> {
  const questions: PromptObject[] = [
    {
      type: 'text',
      name: 'username',
      message: 'Admin username?',
      initial: 'admin',
    },
    {
      type: 'password',
      name: 'password',
      message: 'Admin password?',
      initial: 'admin',
    },
    {
      type: 'number',
      name: 'port',
      message: 'Port',
      initial: 3000,
    },
    {
      type: 'confirm',
      name: 'https',
      message: 'Use HTTPS',
      initial: true,
    },
    {
      type: 'number',
      name: 'csCount',
      message: 'How many charging stations',
      initial: 5,
    },
  ]

  const response = await prompts(questions)

  const dataStorage = new DataStorage<IDataStorageSchema>('csms-server')
  dataStorage.set('port', response.port)
  dataStorage.set('https', response.https)
  dataStorage.set('adminCredentials', { username: response.username, passwordHash: hashPassword(response.password) })

  dataStorage.set('validUsers', [
    { name: 'Anton Aarbinger', rfid: 'aaa' },
    { name: 'Bernd Brotzeitholer', rfid: 'bbb' },
  ])

  if (!dataStorage.has('chargingStationModels')) {
    dataStorage.set('chargingStationModels', [])
  }

  for (let i = 1; i <= response.csCount; i++) {
    createChargeStation(dataStorage, `CS${i}`)
  }
}

function createChargeStation(dataStorage: DataStorage<IDataStorageSchema>, uniqueIdentifier: string): void {
  const models = dataStorage.get('chargingStationModels').map((x) => SerializationHelper.deserialize(ChargingStationModel, x))
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

main().then().catch(console.error)
