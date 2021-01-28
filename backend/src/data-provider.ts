import { ChargingStation } from './charging-station'

export class DataProvider {
  private static _instance: DataProvider | undefined

  private chargingStations: ChargingStation[] = [
    new ChargingStation('LS001', 'LS001', 'test'),
    new ChargingStation('LS002', 'LS002', 'test'),
  ]

  private constructor() {
    // nothing to do
  }

  public static get instance(): DataProvider {
    if (!this._instance) {
      this._instance = new DataProvider()
    }
    return this._instance
  }

  public getChargingStation(uniqueIdentifier: string): ChargingStation | undefined {
    return this.chargingStations.find((cs) => cs.uniqueIdentifier === uniqueIdentifier)
  }
}
