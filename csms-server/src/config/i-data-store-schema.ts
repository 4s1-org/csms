export interface IDataStorageSchema {
  port: number
  adminCredentials: {
    username: string
    passwordHash: string
  }
  validUsers: Array<{ name: string; rfid: string }>
  chargingStationModels: string[]
}
