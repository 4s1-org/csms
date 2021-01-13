// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetTransactionStatusResponseDto implements IResponseMessage {
  public constructor(
    messagesInQueue: boolean,
  ) {
    this.messagesInQueue = messagesInQueue
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Whether the transaction is still ongoing.
   */
  @IsOptional()
  @IsBoolean()
  public ongoingIndicator!: boolean

  /**
   * Whether there are still message to be delivered.
   */
  @IsNotEmpty()
  @IsBoolean()
  public messagesInQueue: boolean
}
