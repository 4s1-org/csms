import { IKeyValue } from "../i-key-value"
import { Validatable } from "../validatable"
import { SchemaDefinitionProperty } from "./schema-definition-property"

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
      if (!this.data.enum || !this.key.endsWith("EnumType") || !this.data.javaType.endsWith("Enum")) {
        throw new Error(`${this.key}: I thought it was a enum`)
      }
    } else if (this.data.type === "object") {
      if (!this.data.properties) {
        throw new Error(`${this.key}: I thought it was a custom type`)
      }

      for (const key in this.data.properties) {
        const item = new SchemaDefinitionProperty(key, this.data.properties[key])
        item.init()
      }

    } else {
      throw new Error(`${this.key}: Unknown Type: ${this.data.type}`)
    }
  }
}
