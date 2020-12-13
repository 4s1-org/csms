// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingStateEnum } from '../enums/charging-state.enum'
import { ReasonEnum } from '../enums/reason.enum'

/**
 * Transaction
urn:x-oca:ocpp:uid:2:233318
 */
export class TransactionDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * This contains the Id of the transaction.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 36)
  @IsString()
  public transactionId!: string

  @ApiProperty()
  @IsOptional()
  @IsEnum(ChargingStateEnum)
  public chargingState!: ChargingStateEnum

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public timeSpentCharging!: number

  @ApiProperty()
  @IsOptional()
  @IsEnum(ReasonEnum)
  public stoppedReason!: ReasonEnum

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public remoteStartId!: number
}
