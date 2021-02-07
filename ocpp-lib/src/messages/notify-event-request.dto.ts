// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { EventDataDto } from '../datatypes/event-data.dto'

export class NotifyEventRequestDto extends RequestBaseDto {
  public constructor(
    generatedAt: string,
    seqNo: number,
    eventData: EventDataDto[],
  ) {
    super()
    this.generatedAt = generatedAt
    this.seqNo = seqNo
    this.eventData = eventData
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  public generatedAt: string

  /**
   * “to be continued” indicator. Indicates whether another part of the report follows in an upcoming notifyEventRequest message. Default value when omitted is false.
   */
  public tbc!: boolean

  /**
   * Sequence number of this message. First message starts at 0.
   */
  public seqNo: number

  @Type(() => EventDataDto)
  public eventData: EventDataDto[]
}
