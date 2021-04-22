import { ChargingStationModel, UserModel } from '@yellowgarbagebag/csms-lib'

export interface IDataStorageSchema {
  port: number
  https: boolean
  adminCredentials: {
    username: string
    passwordHash: string
  }
  users: UserModel[]
  chargingStations: ChargingStationModel[]
}
