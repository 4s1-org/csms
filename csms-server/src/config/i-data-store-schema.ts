export interface IDataStorageSchema {
  port: number
  adminCredentials: {
    username: string
    passwordHash: string
  }
  chargingStationModels: string[]
  devMode: boolean
}
