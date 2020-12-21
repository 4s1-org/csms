import { IKeyValue } from "../i-key-value"
import { PropertySkeleton } from "../skeletons/property-skeleton"
import { Validatable } from "../validatable"

interface Foo {
  $ref?: string
  description?: string
  type?: string
  maxLength?: number
  additionalItems?: boolean
  minItems?: number
  items?: IKeyValue
  format?: string
  maxItems?: number
  default?: string
  minimum?: number
  maximum?: number
}

export class SchemaDefinitionProperty extends Validatable<Foo> {
  public constructor(
    key: string,
    data: Foo,
    private readonly skeleton: PropertySkeleton
  ) {
    super(key, data)
  }

  protected getMustProperties(): string[] {
    return []
  }

  protected getCouldProperties(): string[] {
    return ["$ref", "description", "type", "maxLength", "additionalItems", "minItems", "items", "format", "maxItems", "default", "minimum", "maximum"]
  }

  protected handleData(): void {
    // Entweder $ref oder type muss vorhanden sein
    if (this.data.$ref) {
      if (Object.keys(this.data).length !== 1) {
        throw new Error(`${this.key}: I though $ref is the only property`)
      }
      if (!this.data.$ref.startsWith("#/definitions/")) {
        throw new Error(`${this.key}: I though $ref should start with definition`)
      }

      const type = this.data.$ref.substr(14, this.data.$ref.length - 13)
      this.skeleton.setIsCustomType(type)
      return
    }

    // Special thing beim DataTransferRequest. Da gibt es ein "data" was alles möglich sein darf.
    if (this.data.description && Object.keys(this.data).length === 1) {
      // ToDo: Das muss any sein.
      this.skeleton.setIsCustomType("string")
      // this.item = new SchemaDefinitionPropertyItem(this.key, "string", undefined, this.data.description)
      return
    }

    if (!this.data.type) {
      throw new Error(`${this.key}: No $ref and no type`)
    }

    this.skeleton.comment = this.data.description

    if (this.data.type === "string") {
      this.skeleton.setIsString()
      if (this.data.maxLength) {
        this.skeleton.setLength(0, this.data.maxLength)
      }
      return
    }

    if (this.data.type === "integer") {
      this.skeleton.setIsInteger()
      return
    }

    if (this.data.type === "array") {
      // ToDo
      this.skeleton.setIsAny()
      // this.item = new SchemaDefinitionPropertyItem(this.key, "any", undefined, undefined)
      return
    }

    if (this.data.type === "number") {
      this.skeleton.setIsNumber()
      return
    }

    if (this.data.type === "boolean") {
      this.skeleton.setIsBoolean()
      return
    }

    throw new Error(`${this.key}: Unknown typ: ${this.data.type}`)
  }
}
