export class DataProvider {
  private static _instance: DataProvider | undefined

  private constructor() {
    // nothing to do
  }

  public static get instance(): DataProvider {
    if (!this._instance) {
      this._instance = new DataProvider()
    }
    return this._instance
  }
}
