import { Logger } from '@yellowgarbagebag/common-lib'
import { ChargingStationModel, SerializationHelper } from '@yellowgarbagebag/csms-lib'
import fs from 'fs'
import path from 'path'

export class DataProvider {
  protected logger: Logger = new Logger('DataProvider')
  private static _instance: DataProvider | undefined

  private chargingStationModels: ChargingStationModel[] = []

  private constructor() {
    // nothing to do
  }

  public getAllModels(): ChargingStationModel[] {
    return this.chargingStationModels
  }

  public static get instance(): DataProvider {
    if (!this._instance) {
      this._instance = new DataProvider()
    }
    return this._instance
  }

  public load(): void {
    const dir = path.join(__dirname, '..', 'data')
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    const files = fs.readdirSync(dir)

    for (const file of files) {
      this.logger.info(`Load ${file}`)

      const pathWithFilename = path.join(dir, file)
      const content = fs.readFileSync(pathWithFilename, { encoding: 'utf-8' })
      const state = SerializationHelper.deserialize(ChargingStationModel, content)
      this.chargingStationModels.push(state)
    }

    if (this.chargingStationModels.length === 0) {
      const model = new ChargingStationModel('LS001')
      model.username = 'LS001'
      model.password = 'test'
      this.chargingStationModels.push(model)
    }
  }

  public save(): void {
    const folder = path.join(__dirname, '..', 'data')
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder)
    }

    for (const state of this.chargingStationModels) {
      this.logger.info(`Save ${state.uniqueIdentifier}`)
      const json = SerializationHelper.serialize(state, ['hidden'])
      const filename = path.join(folder, `${state.uniqueIdentifier}.json`)
      fs.writeFileSync(filename, json, { encoding: 'utf-8' })
    }
  }

  public findChargingStationModel(uniqueIdentifier: string): ChargingStationModel | undefined {
    return this.chargingStationModels.find((cs) => cs.uniqueIdentifier === uniqueIdentifier)
  }
}
