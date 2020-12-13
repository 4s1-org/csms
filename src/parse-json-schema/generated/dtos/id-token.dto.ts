// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenEnum } from '../enums/id-token.enum'

/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 */
export class IdTokenDto {
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
  @Length(0, 36)
  @IsString()
  public idToken!: string

  @ApiProperty()
  @IsNotEmpty()
  public type!: IdTokenEnum
}
