import { ClassGenerator } from "../class-generator"
import { IKeyValue } from "../i-key-value"
import { Validatable } from "../validatable"
import { SchemaDefinition } from "./schema-definition"
import { SchemaDefinitionProperty, SchemaDefinitionPropertyItem } from "./schema-definition-property"

interface Foo {
  $schema: string
  $id: string
  comment: string
  definitions: IKeyValue
  type: string
  additionalProperties: boolean
  properties: IKeyValue

  required?: string[]
  description?: string
}

export class SchemaRoot extends Validatable<Foo> {
  private requireFields: string[] = []

  public constructor(key: string, data: Foo) {
    super(key, data)
  }

  protected getMustProperties(): string[] {
    return ["$schema", "$id", "comment", "definitions", "type", "additionalProperties", "properties"]
  }

  protected getCouldProperties(): string[] {
    return ["required", "description"]
  }

  protected handleData(): void {
    this.requireFields = this.data.required ? this.data.required : []

    // Nested stuff
    for (const key in this.data.definitions) {
      const item = new SchemaDefinition(key, this.data.definitions[key])
      item.init()
    }

    // Object itself
    const items: SchemaDefinitionPropertyItem[] = []
    const required = this.data.required || []
    for (const key in this.data.properties) {
      const item = new SchemaDefinitionProperty(key, this.data.properties[key])
      item.init()
      item.Item.isRequired = required.includes(key)
      items.push(item.Item)
    }
    ClassGenerator.Instance.addDto(this.key, this.data.description, items)
  }
}
