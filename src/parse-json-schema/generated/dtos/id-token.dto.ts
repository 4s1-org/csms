// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenEnum } from '../enums/id-token.enum'

/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 */
export class IdTokenDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public additionalInfo!: any

  /**
   * IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.
   */
  @IsNotEmpty()
  @Length(0, 36)
  @ApiProperty()
  public idToken!: string

  @IsNotEmpty()
  @ApiProperty()
  public type!: IdTokenEnum
}
