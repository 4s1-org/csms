// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { DatatypeBaseDto } from '../generated/datatype-base.dto'

/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export class CustomDataDto extends DatatypeBaseDto {
  private _className: "CustomDataDto" = "CustomDataDto"

  public constructor(
    vendorId: string,
  ) {
    super()
    this.vendorId = vendorId
  }

  public vendorId: string

  // To be implemented later
  public get allowAdditionalProperties(): boolean {
    return true
  }
}
