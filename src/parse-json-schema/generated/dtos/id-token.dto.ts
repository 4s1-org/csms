// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { AdditionalInfoDto } from './additional-info.dto'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenEnum } from '../enums/id-token.enum'

/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 */
export class IdTokenDto {
  public constructor(
    idToken: string,
    type: IdTokenEnum,
  ) {
    this.idToken = idToken
    this.type = type
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  // MinItems: 1
  @IsArray()
  public additionalInfo!: AdditionalInfoDto[]

  /**
   * IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(36)
  @IsString()
  public idToken: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(IdTokenEnum)
  public type: IdTokenEnum
}
