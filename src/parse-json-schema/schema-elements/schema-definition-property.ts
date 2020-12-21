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
        this.skeleton.addImportOwnClass(type + "Enum", `${this.skeleton.formatFilename(type)}.enum`)
      } else if (this.data.$ref.endsWith("Type")) {
        // DTO
        const type = this.data.$ref.substr(14, this.data.$ref.length - 18)
        this.skeleton.setIsCustomType(type + "Dto")
        this.skeleton.addImportOwnClass(type + "Dto", `${this.skeleton.formatFilename(type)}.dto`)
      } else if (this.data.$ref.endsWith("AuthorizationData")) {
        // DTO - AuthorizationData
        const type = this.data.$ref.substr(14, this.data.$ref.length - 14)
        this.skeleton.setIsCustomType(type + "Dto")
        this.skeleton.addImportOwnClass(type + "Dto", `${this.skeleton.formatFilename(type)}.dto`)
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

    if (this.data.minItems !== undefined) {
      this.skeleton.setMinItems(this.data.minItems)
    }
    if (this.data.maxItems !== undefined) {
      this.skeleton.setMinItems(this.data.maxItems)
    }
    if (this.data.minimum !== undefined) {
      this.skeleton.setMinimum(this.data.minimum)
    }
    if (this.data.maximum !== undefined) {
      this.skeleton.setMaximum(this.data.maximum)
    }
    if (this.data.maxLength) {
      this.skeleton.setMaxLength(this.data.maxLength)
    }
    if (this.data.format) {
      this.skeleton.setFormat(this.data.format)
    }
    if (this.data.default) {
      this.skeleton.setDefault(this.data.default)
    }

    if (this.data.type === "string") {
      this.skeleton.setIsString()
      return
    }

    if (this.data.type === "integer") {
      this.skeleton.setIsInteger()
      return
    }

    if (this.data.type === "array") {
      this.handleDataArray()
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

  private handleDataArray(): void {
    if (!this.data.items || Object.keys(this.data.items).length === 0) {
      throw new Error(`${this.key}: Muss ein Item haben`)
    }
    const keyZero = Object.keys(this.data.items)[0]
    const valueZero = this.data.items[keyZero]

    let isCustomType: boolean | undefined
    let isEnum: boolean | undefined
    let type: string | undefined

    if (keyZero === "$ref" && valueZero.startsWith("#/definitions/")) {
      if (valueZero.endsWith("EnumType")) {
        isCustomType = true
        type = valueZero.substr(14, valueZero.length - 22)
        isEnum = true
      } else if (valueZero.endsWith("Type")) {
        isCustomType = true
        type = valueZero.substr(14, valueZero.length - 18)
        isEnum = false
      } else if (valueZero.endsWith("AuthorizationData")) {
        isCustomType = true
        type = valueZero.substr(14, valueZero.length - 14)
        isEnum = false
      } else {
        throw new Error(`${this.key}: Unknown Type`)
      }
    } else if (keyZero === "type" && valueZero === "integer") {
      isCustomType = false
      type = "integer"
      isEnum = false
    } else if (keyZero === "type" && valueZero === "string") {
      isCustomType = false
      type = "string"
      isEnum = false
    } else {
      throw new Error(`${this.key}: Unknown Type`)
    }

    if (isCustomType === undefined || type === undefined || isEnum === undefined) {
      throw new Error("All types should be defined")
    }

    if (isCustomType) {
      if (isEnum) {
        this.skeleton.setIsCustomTypeArray(type + "Enum")
        this.skeleton.addImportOwnClass(type + "Enum", `${this.skeleton.formatFilename(type)}.enum`)
      } else {
        this.skeleton.setIsCustomTypeArray(type + "Dto")
        this.skeleton.addImportOwnClass(type + "Dto", `${this.skeleton.formatFilename(type)}.dto`)
      }
    } else {
      if (type === "string") {
        this.skeleton.setIsStringArray()
      } else if (type === "integer") {
        this.skeleton.setIsIntegerArray()
      } else {
        throw new Error(`${this.key}: Unknown constellation`)
      }
    }
  }
}
