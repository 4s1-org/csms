export interface IValidUser {
  name: string
  rfid: string
}

export interface IDataStorageSchema {
  port: number
  https: boolean
  adminCredentials: {
    username: string
    passwordHash: string
  }
  validUsers: IValidUser[]
  chargingStationModels: string[]
}
