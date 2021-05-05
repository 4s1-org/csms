import { ChargingStationModel, RfidCardModel } from '@yellowgarbagebag/csms-lib'

export interface IDataStorageSchema {
  port: number
  https: boolean
  adminCredentials: {
    username: string
    passwordHash: string
  }
  rfids: RfidCardModel[]
  chargingStations: ChargingStationModel[]
}
