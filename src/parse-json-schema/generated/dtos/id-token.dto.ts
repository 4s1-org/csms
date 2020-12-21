// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
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
  public additionalInfo!: any

  /**
   * IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 36)
  public idToken: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(IdTokenEnum)
  public type: IdTokenEnum
}
