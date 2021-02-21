import { ChargingStationModel } from '@yellowgarbagebag/csms-lib'

export interface IDataStorageSchema {
  port: number
  adminCredentials: {
    username: string
    passwordHash: string
  }
  chargingStations: ChargingStationModel[]
  devMode: boolean
}
