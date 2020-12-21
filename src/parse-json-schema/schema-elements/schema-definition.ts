import { ClassGenerator } from "../class-generator"
import { IKeyValue } from "../i-key-value"
import { ClassSkeleton } from "../skeletons/class-skeleton"
import { EnumSkeleton } from "../skeletons/enum-skeleton"
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
  public constructor(key: string, data: Foo) {
    super(key, data)
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
      if (this.data.additionalProperties) {
        throw new Error(`${this.key}: I thought enums can't have additional properties`)
      }

      // Remove "EnumType"
      const name = this.key.substr(0, this.key.length - 8)
      const skeleton = new EnumSkeleton(name, this.data.enum)
      skeleton.comment = this.data.description
      ClassGenerator.instance.addEnum(skeleton)
    } else if (this.data.type === "object") {
      if (!this.data.properties) {
        throw new Error(`${this.key}: I thought it was a custom type`)
      }
      // const skeleton = new ClassSkeleton(this.key)

      // Remove "Type"
      const name = this.key.substr(0, this.key.length - 4)
      const skeleton = new ClassSkeleton(name, true)
      skeleton.comment = this.data.description

      const required = this.data.required || []
      for (const key in this.data.properties) {
        const prop = this.data.properties[key]
        const propSkeleton = skeleton.addProperty(key, required.includes(key))

        const item = new SchemaDefinitionProperty(key, prop, propSkeleton)
        item.init()
      }
      ClassGenerator.instance.addClass(skeleton)
    } else {
      throw new Error(`${this.key}: Unknown Type: ${this.data.type}`)
    }
  }
}
