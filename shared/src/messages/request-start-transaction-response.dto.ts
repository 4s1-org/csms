// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { RequestStartStopStatusEnum } from '../enumerations/request-start-stop-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class RequestStartTransactionResponseDto implements IResponseMessage {
  public constructor(
    status: RequestStartStopStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(RequestStartStopStatusEnum)
  public status: RequestStartStopStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto

  /**
   * When the transaction was already started by the Charging Station before the RequestStartTransactionRequest was received, for example: cable plugged in first. This contains the transactionId of the already started transaction.
   */
  @IsOptional()
  @MaxLength(36)
  @IsString()
  public transactionId!: string
}
