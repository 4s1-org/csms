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

export class SchemaDefinitionProperty extends Validatable<Foo> {
  public constructor(private key: string, data: Foo) {
    super(data)
  }

  protected getMustProperties(): string[] {
    return []
  }

  protected getCouldProperties(): string[] {
    return ["$ref", "description", "type", "maxLength", "additionalItems", "minItems", "items", "format", "maxItems", "default", "minimum", "maximum"]
  }

  protected handleData(): void {
    //
  }
}
