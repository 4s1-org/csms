// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { ChargingStateEnum } from '../enums/charging-state.enum'
import { CustomDataDto } from './custom-data.dto'
import { ReasonEnum } from '../enums/reason.enum'

/**
 * Transaction
 * urn:x-oca:ocpp:uid:2:233318
 */
export class TransactionDto {
  public constructor(
    transactionId: string,
  ) {
    this.transactionId = transactionId
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * This contains the Id of the transaction.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(36)
  @IsString()
  public transactionId: string

  @ApiProperty()
  @IsOptional()
  @IsEnum(ChargingStateEnum)
  public chargingState!: ChargingStateEnum

  /**
   * Transaction. Time_ Spent_ Charging. Elapsed_ Time
   * urn:x-oca:ocpp:uid:1:569415
   * Contains the total time that energy flowed from EVSE to EV during the transaction (in seconds). Note that timeSpentCharging is smaller or equal to the duration of the transaction.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public timeSpentCharging!: number

  @ApiProperty()
  @IsOptional()
  @IsEnum(ReasonEnum)
  public stoppedReason!: ReasonEnum

  /**
   * The ID given to remote start request (<<requeststarttransactionrequest, RequestStartTransactionRequest>>. This enables to CSMS to match the started transaction to the given start request.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public remoteStartId!: number
}
