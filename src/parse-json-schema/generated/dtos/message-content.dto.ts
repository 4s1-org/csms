// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { MessageFormatEnum } from '../enums/message-format.enum'

/**
 * Message_ Content
 * urn:x-enexis:ecdm:uid:2:234490
 * Contains message details, for a message to be displayed on a Charging Station.
 */
export class MessageContentDto {
  public constructor(
    format: MessageFormatEnum,
    content: string,
  ) {
    this.format = format
    this.content = content
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(MessageFormatEnum)
  public format: MessageFormatEnum

  /**
   * Message_ Content. Language. Language_ Code
   * urn:x-enexis:ecdm:uid:1:570849
   * Message language identifier. Contains a language code as defined in <<ref-RFC5646,[RFC5646]>>.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(8)
  @IsString()
  public language!: string

  /**
   * Message_ Content. Content. Message
   * urn:x-enexis:ecdm:uid:1:570852
   * Message contents.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(512)
  @IsString()
  public content: string
}
