// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MessagePriorityEnum } from '../enumerations/message-priority.enum'
import { MessageStateEnum } from '../enumerations/message-state.enum'

export class GetDisplayMessagesRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: 'GetDisplayMessagesRequestDto' = 'GetDisplayMessagesRequestDto'

  public constructor(
    requestId: number,
  ) {
    super()
    this.requestId = requestId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * If provided the Charging Station shall return Display Messages of the given ids. This field SHALL NOT contain more ids than set in <<configkey-number-of-display-messages,NumberOfDisplayMessages.maxLimit>>
   */
  public id!: number[]

  /**
   * The Id of this request.
   */
  public requestId: number

  public priority!: MessagePriorityEnum

  public state!: MessageStateEnum
}
