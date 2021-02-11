import { Logger } from '@yellowgarbagebag/common-lib'
import { ChargingStationState, SerializationHelper } from '@yellowgarbagebag/csms-lib'
import fs from 'fs'
import path from 'path'

export class DataProvider {
  protected logger: Logger = new Logger('DataProvider')
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
    }
    return this._instance
  }

  public load(): void {
    const dir = path.join(__dirname, '..', 'data')
    const files = fs.readdirSync(dir)

    for (const file of files) {
      this.logger.info(`Load ${file}`)

      const pathWithFilename = path.join(dir, file)
      const content = fs.readFileSync(pathWithFilename, { encoding: 'utf-8' })
      const state = SerializationHelper.deserialize(ChargingStationState, content)
      this.chargingStationStates.push(state)
    }
  }

  public save(): void {
    const folder = path.join(__dirname, '..', 'data')
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder)
    }

    for (const state of this.chargingStationStates) {
      this.logger.info(`Save ${state.uniqueIdentifier}`)
      const json = SerializationHelper.serialize(state, ['hidden'])
      const filename = path.join(folder, `${state.uniqueIdentifier}.json`)
      fs.writeFileSync(filename, json, { encoding: 'utf-8' })
    }
  }

  public findChargingStationState(uniqueIdentifier: string): ChargingStationState | undefined {
    return this.chargingStationStates.find((cs) => cs.uniqueIdentifier === uniqueIdentifier)
  }
}
