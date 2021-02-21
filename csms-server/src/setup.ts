#!/usr/bin/env node

import { DataStorage } from './config/data-storage'
import { IDataStorageSchema } from './config/i-data-store-schema'
import { hashPassword } from './config/password'
import { Command } from 'commander'

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
