// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 */
export class AdditionalInfoDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  /**
   * This field specifies the additional IdToken.
   */
  @IsNotEmpty()
  @Length(0, 36)
  @ApiProperty()
  public additionalIdToken!: string

  /**
   * This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.
   */
  @IsNotEmpty()
  @Length(0, 50)
  @ApiProperty()
  public type!: string
}
