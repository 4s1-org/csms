// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'

export class GetTransactionStatusResponseDto {
  public constructor(
    messagesInQueue: boolean,
  ) {
    this.messagesInQueue = messagesInQueue
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Whether the transaction is still ongoing.
   */
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public ongoingIndicator!: boolean

  /**
   * Whether there are still message to be delivered.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  public messagesInQueue: boolean
}
