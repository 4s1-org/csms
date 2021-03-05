// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { MessageFormatEnum } from '../enumerations/message-format.enum'

/**
 * Message_ Content
 * urn:x-enexis:ecdm:uid:2:234490
 * Contains message details, for a message to be displayed on a Charging Station.
 */
export class MessageContentDto extends DatatypeBaseDto {
  private _className: "MessageContentDto" = "MessageContentDto"

  public constructor(
    format: MessageFormatEnum,
    content: string,
  ) {
    super()
    this.format = format
    this.content = content
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public format: MessageFormatEnum

  /**
   * Message_ Content. Language. Language_ Code
   * urn:x-enexis:ecdm:uid:1:570849
   * Message language identifier. Contains a language code as defined in <<ref-RFC5646,[RFC5646]>>.
   */
  public language!: string

  /**
   * Message_ Content. Content. Message
   * urn:x-enexis:ecdm:uid:1:570852
   * Message contents.
   */
  public content: string
}
