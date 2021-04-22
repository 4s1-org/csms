#!/usr/bin/env node

import { DataStorage } from './config/data-storage'
import { IDataStorageSchema } from './config/i-data-store-schema'
import { hashPassword } from './config/password'
import { ChargingStationModel, UserModel } from '@yellowgarbagebag/csms-lib'
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

  const userA = new UserModel('aaa')
  userA.lastName = 'Aarbinger'
  userA.firstName = 'Anton'
  const userB = new UserModel('bbb')
  userB.lastName = 'Brotzeitholer'
  userB.firstName = 'Bernd'
  dataStorage.set('users', [userA, userB])

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
    const cs = new ChargingStationModel(uniqueIdentifier, uniqueIdentifier, hashPassword('test'))
    models.push(cs)
  }
  dataStorage.set('chargingStations', models)
}

main().then().catch(console.error)
