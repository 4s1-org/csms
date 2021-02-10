import { ChargingStation } from './charging-station'
import { ChargingStationState } from './charging-station-state'

export class DataProvider {
  private static _instance: DataProvider | undefined

  private chargingStationStates: ChargingStationState[] = []

  private constructor() {
    // nothing to do
  }

  public getAllStates(): ChargingStationState[] {
    return this.chargingStationStates
  }

  public static get instance(): DataProvider {
    if (!this._instance) {
      this._instance = new DataProvider()
      this._instance.init()
    }
    return this._instance
  }

  private init(): void {
    for (let i = 1; i <= 2; i++) {
      const state = new ChargingStationState(`LS00${i}`)
      state.username = `LS00${i}`
      state.password = 'test'
      this.chargingStationStates.push(state)
    }
  }

  public findChargingStationState(uniqueIdentifier: string): ChargingStationState | undefined {
    return this.chargingStationStates.find((cs) => cs.uniqueIdentifier === uniqueIdentifier)
  }
}
