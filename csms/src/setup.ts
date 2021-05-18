#!/usr/bin/env node

import { DataStorage } from './config/data-storage'
import { IDataStorageSchema } from './config/i-data-store-schema'
import { ChargingStationModel, RfidCardModel } from '@yellowgarbagebag/csms-lib'
import prompts, { PromptObject } from 'prompts'
import { hashPassword } from '@yellowgarbagebag/common-lib'

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

  const dataStorage = new DataStorage<IDataStorageSchema>('csms-config')
  dataStorage.set('port', response.port)
  dataStorage.set('https', response.https)
  dataStorage.set('adminCredentials', { username: response.username, passwordHash: hashPassword(response.password) })

  const rfidCard1 = new RfidCardModel()
  rfidCard1.id = 'aaa'
  rfidCard1.rfid = 'aaa'
  rfidCard1.description = 'Anton Aarbinger'
  rfidCard1.enabled = true
  const rfidCard2 = new RfidCardModel()
  rfidCard2.id = 'bbb'
  rfidCard2.rfid = 'bbb'
  rfidCard2.description = 'Bernd Brotzeitholer'
  rfidCard2.enabled = true

  dataStorage.set('rfids', [rfidCard1, rfidCard2])

  if (!dataStorage.has('chargingStations')) {
    dataStorage.set('chargingStations', [])
  }

  for (let i = 1; i <= response.csCount; i++) {
    createChargeStation(dataStorage, `CS${i}`)
  }
}

function createChargeStation(dataStorage: DataStorage<IDataStorageSchema>, uniqueIdentifier: string): void {
  const models = dataStorage.get('chargingStations')
  // Wenn Es keine Ladesäule gibt, lege sie an
  if (!models.find((x) => x.uniqueIdentifier === uniqueIdentifier)) {
    const cs = new ChargingStationModel()
    cs.id = `id_${uniqueIdentifier}`
    cs.uniqueIdentifier = uniqueIdentifier
    cs.username = uniqueIdentifier
    cs.passwordHash = hashPassword('test')
    cs.enabled = true
    models.push(cs)
  }
  dataStorage.set('chargingStations', models)
}

main().then().catch(console.error)
