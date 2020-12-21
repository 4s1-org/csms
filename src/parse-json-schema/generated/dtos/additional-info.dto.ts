// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 */
export class AdditionalInfoDto {
  public constructor(
    additionalIdToken: string,
    type: string,
  ) {
    this.additionalIdToken = additionalIdToken
    this.type = type
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * This field specifies the additional IdToken.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 36)
  public additionalIdToken: string

  /**
   * This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 50)
  public type: string
}
