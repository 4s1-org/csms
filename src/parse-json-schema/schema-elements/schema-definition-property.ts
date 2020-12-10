import { IKeyValue } from "../i-key-value"
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

export class SchemaDefinitionPropertyItem {
  public constructor(
    public readonly name: string,
    public readonly type: string,
    public maxLength: number | undefined,
    public description: string | undefined,
  ) {
    // nothing to do
  }


  private _isRequired = false

  public get isRequired(): boolean {
    return this._isRequired
  }

  public set isRequired(isRequired: boolean) {
    this._isRequired = isRequired
  }
}

export class SchemaDefinitionProperty extends Validatable<Foo> {
  private item: SchemaDefinitionPropertyItem | undefined

  public constructor(key: string, data: Foo) {
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
      this.item = new SchemaDefinitionPropertyItem(
        this.key,
        this.data.$ref.substr(14, this.data.$ref.length - 13),
        undefined,
        undefined)
      return
    }

    // Special thing beim DataTransferRequest. Da gibt es ein "data" was alles möglich sein darf.
    if (this.data.description && Object.keys(this.data).length === 1) {
      // ToDo: Das muss any sein.
      this.item = new SchemaDefinitionPropertyItem(this.key, "string", undefined, this.data.description)
      return
    }

    if (!this.data.type) {
      throw new Error(`${this.key}: No $ref and no type`)
    }


    if (this.data.type === "string") {
      this.item = new SchemaDefinitionPropertyItem(this.key, "string", this.data.maxLength, this.data.description)
      return
    }

    if (this.data.type === "integer") {
      this.item = new SchemaDefinitionPropertyItem(this.key, "number", undefined, undefined)
      return
    }

    if (this.data.type === "array") {
      this.item = new SchemaDefinitionPropertyItem(this.key, "any", undefined, undefined)
      return
    }

    if (this.data.type === "number") {
      this.item = new SchemaDefinitionPropertyItem(this.key, "number", undefined, undefined)
      return
    }

    if (this.data.type === "boolean") {
      this.item = new SchemaDefinitionPropertyItem(this.key, "boolean", undefined, undefined)
      return
    }

    throw new Error(`${this.key}: Unknown typ: ${this.data.type}`)
  }

  public get Item(): SchemaDefinitionPropertyItem {
    if (!this.item) {
      throw new Error("Item can't be undefined")
    }
    return this.item
  }
}
