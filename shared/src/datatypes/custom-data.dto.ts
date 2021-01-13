// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export class CustomDataDto {
  public constructor(
    vendorId: string,
  ) {
    this.vendorId = vendorId
  }

  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  public vendorId: string

  // To be implemented later
  public get allowAdditionalProperties(): boolean {
    return true
  }
}
