// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { RequestStartStopStatusEnum } from '../enumerations/request-start-stop-status.enum'
import { StatusInfoDto } from '../types/status-info.dto'

export class RequestStartTransactionResponseDto {
  public constructor(
    status: RequestStartStopStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(RequestStartStopStatusEnum)
  public status: RequestStartStopStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
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
