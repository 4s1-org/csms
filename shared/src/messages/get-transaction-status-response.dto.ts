// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetTransactionStatusResponseDto extends ResponseBaseDto {
  public constructor(
    messagesInQueue: boolean,
  ) {
    super()
    this.messagesInQueue = messagesInQueue
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Whether the transaction is still ongoing.
   */
  public ongoingIndicator!: boolean

  /**
   * Whether there are still message to be delivered.
   */
  public messagesInQueue: boolean
}
