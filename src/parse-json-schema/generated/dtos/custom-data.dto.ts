// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Length } from 'class-validator'

/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export class CustomDataDto {
  public constructor(
    vendorId: string,
  ) {
    this.vendorId = vendorId
  }

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 255)
  public vendorId: string

  // To be implemented later
  public get allowAdditionalProperties(): boolean {
    return true
  }
}
