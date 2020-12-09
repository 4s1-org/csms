// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MessageFormatEnum } from '../enums/message-format.enum'

/**
 * Message_ Content
urn:x-enexis:ecdm:uid:2:234490
Contains message details, for a message to be displayed on a Charging Station.
 */
export class MessageContentDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public format: MessageFormatEnum

  /**
   * Message_ Content. Language. Language_ Code
urn:x-enexis:ecdm:uid:1:570849
Message language identifier. Contains a language code as defined in &lt;&lt;ref-RFC5646,[RFC5646]&gt;&gt;.
   */
  @IsOptional()
  @Length(0, 8)
  @ApiProperty()
  public language: string

  /**
   * Message_ Content. Content. Message
urn:x-enexis:ecdm:uid:1:570852
Message contents.
   */
  @Length(0, 512)
  @ApiProperty()
  public content: string
}
