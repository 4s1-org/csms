export interface IValidUser {
  name: string
  rfid: string
}

export interface IDataStorageSchema {
  port: number
  adminCredentials: {
    username: string
    passwordHash: string
  }
  validUsers: IValidUser[]
  chargingStationModels: string[]
}
