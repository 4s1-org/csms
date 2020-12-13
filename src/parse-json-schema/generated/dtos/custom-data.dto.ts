// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export class CustomDataDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 255)
  @IsString()
  public vendorId!: string
}
