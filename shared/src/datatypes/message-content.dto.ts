// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { MessageFormatEnum } from '../enumerations/message-format.enum'

/**
 * Message_ Content
 * urn:x-enexis:ecdm:uid:2:234490
 * Contains message details, for a message to be displayed on a Charging Station.
 */
export class MessageContentDto extends DatatypeBaseDto {
  public constructor(
    format: MessageFormatEnum,
    content: string,
  ) {
    super()
    this.format = format
    this.content = content
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(MessageFormatEnum)
  public format: MessageFormatEnum

  /**
   * Message_ Content. Language. Language_ Code
   * urn:x-enexis:ecdm:uid:1:570849
   * Message language identifier. Contains a language code as defined in <<ref-RFC5646,[RFC5646]>>.
   */
  @IsOptional()
  @MaxLength(8)
  @IsString()
  public language!: string

  /**
   * Message_ Content. Content. Message
   * urn:x-enexis:ecdm:uid:1:570852
   * Message contents.
   */
  @IsNotEmpty()
  @MaxLength(512)
  @IsString()
  public content: string
}
