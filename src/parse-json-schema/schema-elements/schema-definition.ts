import { IKeyValue } from "../i-key-value"
import { Validatable } from "../validatable"

interface Foo {
  javaType: string
  type: string

  description?: string
  properties?: IKeyValue
  required?: string[]
  additionalProperties?: boolean
  enum?: string[]
  default?: string
}

export class SchemaDefinition extends Validatable<Foo> {
  public constructor(private key: string, data: Foo) {
    super(data)
  }

  protected getMustProperties(): string[] {
    return ["javaType", "type"]
  }

  protected getCouldProperties(): string[] {
    return ["description", "properties", "required", "additionalProperties", "enum", "default"]
  }

  protected handleData(): void {
    if (this.data.type === "string") {
      console.log(typeof this, this instanceof SchemaDefinition, this.key)
      if (!this.data.enum || !this.key.endsWith("EnumType")) {
        throw new Error("I thought it was a enum")
      }
    } else if (this.data.type === "object") {

    } else {
      throw new Error(`Unknown Type: ${this.data.type}`)
    }
  }
}
