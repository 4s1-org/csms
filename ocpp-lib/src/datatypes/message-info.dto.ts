// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { MessageContentDto } from './message-content.dto'
import { MessagePriorityEnum } from '../enumerations/message-priority.enum'
import { MessageStateEnum } from '../enumerations/message-state.enum'

/**
 * Message_ Info
 * urn:x-enexis:ecdm:uid:2:233264
 * Contains message details, for a message to be displayed on a Charging Station.
 */
export class MessageInfoDto extends DatatypeBaseDto {
  @Exclude()
  private _className: "MessageInfoDto" = "MessageInfoDto"

  public constructor(
    id: number,
    priority: MessagePriorityEnum,
    message: MessageContentDto,
  ) {
    super()
    this.id = id
    this.priority = priority
    this.message = message
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => ComponentDto)
  public display!: ComponentDto

  /**
   * Identified_ Object. MRID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:569198
   * Master resource identifier, unique within an exchange context. It is defined within the OCPP context as a positive Integer value (greater or equal to zero).
   */
  public id: number

  public priority: MessagePriorityEnum

  public state!: MessageStateEnum

  /**
   * Message_ Info. Start. Date_ Time
   * urn:x-enexis:ecdm:uid:1:569256
   * From what date-time should this message be shown. If omitted: directly.
   */
  public startDateTime!: string

  /**
   * Message_ Info. End. Date_ Time
   * urn:x-enexis:ecdm:uid:1:569257
   * Until what date-time should this message be shown, after this date/time this message SHALL be removed.
   */
  public endDateTime!: string

  /**
   * During which transaction shall this message be shown.
   * Message SHALL be removed by the Charging Station after transaction has
   * ended.
   */
  public transactionId!: string

  @Type(() => MessageContentDto)
  public message: MessageContentDto
}
