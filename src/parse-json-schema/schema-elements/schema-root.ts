import { ClassGenerator } from "../class-generator"
import { IKeyValue } from "../i-key-value"
import { ClassSkeleton } from "../skeletons/class-skeleton"
import { Validatable } from "../validatable"
import { SchemaDefinition } from "./schema-definition"
import { SchemaDefinitionProperty } from "./schema-definition-property"

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
    // Nested stuff
    for (const key in this.data.definitions) {
      const item = new SchemaDefinition(key, this.data.definitions[key])
      item.init()
    }

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
  }
}
