// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { RequestStartStopStatusEnum } from '../enums/request-start-stop-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class RequestStartTransactionResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: RequestStartStopStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto

  /**
   * When the transaction was already started by the Charging Station before the RequestStartTransactionRequest was received, for example: cable plugged in first. This contains the transactionId of the already started transaction.
   */
  @IsOptional()
  @Length(0, 36)
  @ApiProperty()
  public transactionId: string
}
