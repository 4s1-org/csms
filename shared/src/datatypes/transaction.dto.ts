// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ChargingStateEnum } from '../enumerations/charging-state.enum'
import { CustomDataDto } from './custom-data.dto'
import { ReasonEnum } from '../enumerations/reason.enum'

/**
 * Transaction
 * urn:x-oca:ocpp:uid:2:233318
 */
export class TransactionDto extends DatatypeBaseDto {
  public constructor(
    transactionId: string,
  ) {
    super()
    this.transactionId = transactionId
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This contains the Id of the transaction.
   */
  @IsNotEmpty()
  @MaxLength(36)
  @IsString()
  public transactionId: string

  @IsOptional()
  @IsEnum(ChargingStateEnum)
  public chargingState!: ChargingStateEnum

  /**
   * Transaction. Time_ Spent_ Charging. Elapsed_ Time
   * urn:x-oca:ocpp:uid:1:569415
   * Contains the total time that energy flowed from EVSE to EV during the transaction (in seconds). Note that timeSpentCharging is smaller or equal to the duration of the transaction.
   */
  @IsOptional()
  @IsInt()
  public timeSpentCharging!: number

  @IsOptional()
  @IsEnum(ReasonEnum)
  public stoppedReason!: ReasonEnum

  /**
   * The ID given to remote start request (<<requeststarttransactionrequest, RequestStartTransactionRequest>>. This enables to CSMS to match the started transaction to the given start request.
   */
  @IsOptional()
  @IsInt()
  public remoteStartId!: number
}
