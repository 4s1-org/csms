import { ClassGenerator } from '../class-generator'
import { ClassSkeleton } from '../skeletons/class-skeleton'
import { Validatable } from './validatable'
import { SchemaDefinition } from './schema-definition'
import { SchemaDefinitionProperty } from './schema-definition-property'

interface IData {
  $schema: string
  $id: string
  comment: string
  definitions: Record<string, any>
  type: string
  additionalProperties: boolean
  properties: Record<string, any>

  required?: string[]
  description?: string
}

export class SchemaRoot extends Validatable<IData> {
  public constructor(key: string, data: IData) {
    super(key, data)
  }

  protected getMustProperties(): string[] {
    return ['$schema', '$id', 'comment', 'definitions', 'type', 'additionalProperties', 'properties']
  }

  protected getCouldProperties(): string[] {
    return ['required', 'description']
  }

  protected handleData(): void {
    if (!this.data.definitions['CustomDataType']) {
      throw new Error(`${this.key}: Ich dachte, alle Messages haben einen CustomDataType`)
    }
    if (!this.data.properties['customData']) {
      throw new Error(`${this.key}: Ich dachte, alle Messages haben einen CustomData`)
    }

    // Undefined steht hier für true
    if (this.data.additionalProperties === undefined || this.data.additionalProperties) {
      throw new Error(`${this.key}: Ich dachte, additionalProperties sind auf oberster Ebene immer false`)
    }
    if (this.data.type !== 'object') {
      throw new Error(`${this.key}: I thought it would be always an object.`)
    }

    // Remove "Type"
    if (!this.key.endsWith('Request') && !this.key.endsWith('Response')) {
      throw new Error(`${this.key}: I thought it would end with "Request" or "Response"`)
    }

    const skeleton = new ClassSkeleton(this.key)
    skeleton.isRequest = this.key.endsWith('Request')
    skeleton.isResponse = this.key.endsWith('Response')
    skeleton.setComment(this.data.description)

    const required = this.data.required || []
    for (const key in this.data.properties) {
      const prop = this.data.properties[key]
      const propSkeleton = skeleton.addProperty(key, required.includes(key))

      const item = new SchemaDefinitionProperty(key, prop, propSkeleton)
      item.init()
    }

    for (const key in this.data.definitions) {
      const definition = this.data.definitions[key]
      const item = new SchemaDefinition(key, definition)
      item.init()
    }

    ClassGenerator.instance.addClass(skeleton)
  }
}
