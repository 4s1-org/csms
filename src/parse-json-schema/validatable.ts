import { ClassGenerator } from "./class-generator"

export abstract class Validatable<T> {
  private mustProperties: string[]
  private couldProperties: string[]

  public constructor(protected readonly data: T) {
    this.mustProperties = this.getMustProperties()
    this.couldProperties = this.getCouldProperties()

    this.validateProperties()
  }

  protected abstract getMustProperties(): string[]
  protected abstract getCouldProperties(): string[]

  protected abstract handleData(): void

  public init(): void {
    this.handleData()
  }

  private validateProperties(): void {
    const keys = Object.keys(this.data)
    for (const mustProperty of this.mustProperties) {
      const idx = keys.indexOf(mustProperty)
      if (idx !== -1) {
        keys.splice(idx, 1)
      } else {
        throw new Error(`Key "${mustProperty}" is missing.`)
      }
    }

    for (const couldProperty of this.couldProperties) {
      const idx = keys.indexOf(couldProperty)
      if (idx !== -1) {
        keys.splice(idx, 1)
      }
    }

    if (keys.length !== 0) {
      throw new Error(`Invalid properties found: ${keys.join(", ")}`)
    }
  }
}
