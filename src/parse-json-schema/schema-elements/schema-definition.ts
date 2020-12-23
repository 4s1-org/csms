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
      // undefined ist in diesem Fall true
      if (this.data.additionalProperties === undefined || this.data.additionalProperties) {
        throw new Error(`${this.key}: I thought enums can't have additional properties`)
      }
      // Remove "EnumType"
      if (!this.key.endsWith("EnumType")) {
        throw new Error(`${this.key}: I thought it would ends with "EnumType"`)
      }

      const name = this.key.substr(0, this.key.length - 8)
      const skeleton = new EnumSkeleton(name, this.data.enum)
      skeleton.setComment(this.data.description)
      skeleton.setDefaultValue(this.data.default)
      ClassGenerator.instance.addEnum(skeleton)
    } else if (this.data.type === "object") {
      if (!this.data.properties) {
        throw new Error(`${this.key}: I thought it was a custom type`)
      }
      if (this.data.default !== undefined) {
        throw new Error(`${this.key}: Ich dachte Objekte haben keinen default Wert.`)
      }

      // Info: AuthorizationData ist der einzige Datentyp, der nicht mit "Type" endet.

      if (!this.key.endsWith("Type") && this.key !== "AuthorizationData") {
        throw new Error(`${this.key}: I thought it would end with "Type"`)
      }
      // Remove "Type", außer bei dem Sonderfall "AuthorizationData"
      const name = this.key.endsWith("Type") ? this.key.substr(0, this.key.length - 4) : this.key
      const skeleton = new ClassSkeleton(name)
      skeleton.setComment(this.data.description)

      if (this.data.additionalProperties === undefined || this.data.additionalProperties) {
        skeleton.allowAdditionalProperties()
      }

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
