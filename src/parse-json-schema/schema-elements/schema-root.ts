import { IKeyValue } from "../i-key-value"
import { Validatable } from "../validatable"
import { SchemaDefinition } from "./schema-definition"

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

  public constructor(data: Foo) {
    super(data)
  }

  protected getMustProperties(): string[] {
    return ["$schema", "$id", "comment", "definitions", "type", "additionalProperties", "properties"]
  }

  protected getCouldProperties(): string[] {
    return ["required", "description"]
  }

  protected handleData(): void {
    this.requireFields = this.data.required ? this.data.required : []

    for (const key in this.data.definitions) {
      const item = new SchemaDefinition(key, this.data.definitions[key])
      item.init()
    }
  }
}
