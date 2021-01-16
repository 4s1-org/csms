// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 */
export class AdditionalInfoDto extends DatatypeBaseDto {
  public constructor(
    additionalIdToken: string,
    type: string,
  ) {
    super()
    this.additionalIdToken = additionalIdToken
    this.type = type
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This field specifies the additional IdToken.
   */
  @IsNotEmpty()
  @MaxLength(36)
  @IsString()
  public additionalIdToken: string

  /**
   * This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.
   */
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  public type: string
}
