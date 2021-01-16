// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
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

  @IsOptional()
  @Type(() => CustomDataDto)
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
