import { IKeyValue } from "../i-key-value"
import { Validatable } from "../validatable"

export class SchemaRoot extends Validatable {
  public constructor(data: IKeyValue) {
    super(data)
  }

  protected handleContent(data: IKeyValue): void {
    let required = []
    if (data["required"]) {
      required = data["required"]
    }
    console.log(required)
  }


  protected getMustProperties(): string[] {
    return ["$schema", "$id", "comment", "definitions", "type", "additionalProperties", "properties"]
  }

  protected getCouldProperties(): string[] {
    return ["required", "description"]
  }


}
