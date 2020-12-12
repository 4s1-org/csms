// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingStateEnum } from '../enums/charging-state.enum'
import { ReasonEnum } from '../enums/reason.enum'

/**
 * Transaction
urn:x-oca:ocpp:uid:2:233318
 */
export class TransactionDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  /**
   * This contains the Id of the transaction.
   */
  @IsNotEmpty()
  @Length(0, 36)
  @ApiProperty()
  public transactionId!: string

  @IsOptional()
  @ApiProperty()
  public chargingState!: ChargingStateEnum

  @IsOptional()
  @ApiProperty()
  public timeSpentCharging!: number

  @IsOptional()
  @ApiProperty()
  public stoppedReason!: ReasonEnum

  @IsOptional()
  @ApiProperty()
  public remoteStartId!: number
}
