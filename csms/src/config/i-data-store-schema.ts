import { ChargingStationModel, RfidCardModel } from '@4s1/csms-lib'

/**
 * Interface, which describes the structure of the config file.
 */
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
