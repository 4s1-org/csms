// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { RequestStartStopStatusEnum } from '../enums/request-start-stop-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class RequestStartTransactionResponseDto {
  public constructor(
    status: RequestStartStopStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(RequestStartStopStatusEnum)
  public status: RequestStartStopStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto

  /**
   * When the transaction was already started by the Charging Station before the RequestStartTransactionRequest was received, for example: cable plugged in first. This contains the transactionId of the already started transaction.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(36)
  @IsString()
  public transactionId!: string
}
