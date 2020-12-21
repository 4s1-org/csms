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
    this.skeleton.setComment(this.data.description)

    // Entweder $ref oder type muss vorhanden sein
    if (this.data.$ref) {
      if (Object.keys(this.data).length !== 1) {
        throw new Error(`${this.key}: I though $ref is the only property`)
      }
      if (!this.data.$ref.startsWith("#/definitions/")) {
        throw new Error(`${this.key}: I though $ref should start with definition`)
      }
      if (!this.data.$ref.endsWith("Type")) {
        throw new Error(`${this.key}: This case is not implemented`)
      }

      if (this.data.$ref.endsWith("EnumType")) {
        // Enum
        const type = this.data.$ref.substr(14, this.data.$ref.length - 22)
        this.skeleton.setIsEnum(type + "Enum")
        this.skeleton.addImportOwnClass(type + "Enum", `../enums/${this.skeleton.formatFilename(type)}.enum`)
      } else if (this.data.$ref.endsWith("Type")) {
        // DTO
        const type = this.data.$ref.substr(14, this.data.$ref.length - 18)
        this.skeleton.setIsCustomType(type + "Dto")
        this.skeleton.addImportOwnClass(type + "Dto", `./${this.skeleton.formatFilename(type)}.dto`)
      } else {
        throw new Error(`${this.key}: Unknown Type: ${this.data.type}`)
      }
      return
    }

    // Special thing beim DataTransferRequest. Da gibt es ein "data" was alles möglich sein darf.
    if (this.data.description && Object.keys(this.data).length === 1) {
      this.skeleton.setIsCustomType("any")
      return
    }

    if (!this.data.type) {
      throw new Error(`${this.key}: No $ref and no type`)
    }
    if (this.data.items && (this.data.additionalItems === undefined || this.data.additionalItems)) {
      throw new Error(`${this.key}: "additionalItems" should be never set`)
    }


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
      // ToDo Array
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
