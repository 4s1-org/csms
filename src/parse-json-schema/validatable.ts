import { IKeyValue } from "./i-key-value"

export abstract class Validatable {
  private mustProperties: string[]
  private couldProperties: string[]

  public constructor(private readonly data: IKeyValue) {
    this.mustProperties = this.getMustProperties()
    this.couldProperties = this.getCouldProperties()

    this.validateProperties()

    this.handleContent(this.data)
  }

  protected abstract getMustProperties(): string[]
  protected abstract getCouldProperties(): string[]

  protected abstract handleContent(data: IKeyValue): void

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
