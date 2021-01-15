// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { AdditionalInfoDto } from './additional-info.dto'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenEnum } from '../enumerations/id-token.enum'

/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 */
export class IdTokenDto extends DatatypeBaseDto {
  public constructor(
    idToken: string,
    type: IdTokenEnum,
  ) {
    super()
    this.idToken = idToken
    this.type = type
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public additionalInfo!: AdditionalInfoDto[]

  /**
   * IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.
   */
  @IsNotEmpty()
  @MaxLength(36)
  @IsString()
  public idToken: string

  @IsNotEmpty()
  @IsEnum(IdTokenEnum)
  public type: IdTokenEnum
}
