// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsBoolean, IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { EvseDto } from '../datatypes/evse.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'
import { MeterValueDto } from '../datatypes/meter-value.dto'
import { TransactionDto } from '../datatypes/transaction.dto'
import { TransactionEventEnum } from '../enumerations/transaction-event.enum'
import { TriggerReasonEnum } from '../enumerations/trigger-reason.enum'

export class TransactionEventRequestDto implements IRequestMessage {
  public constructor(
    eventType: TransactionEventEnum,
    timestamp: string,
    triggerReason: TriggerReasonEnum,
    seqNo: number,
    transactionInfo: TransactionDto,
  ) {
    this.eventType = eventType
    this.timestamp = timestamp
    this.triggerReason = triggerReason
    this.seqNo = seqNo
    this.transactionInfo = transactionInfo
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(TransactionEventEnum)
  public eventType: TransactionEventEnum

  @IsOptional()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public meterValue!: MeterValueDto[]

  /**
   * The date and time at which this transaction event occurred.
   */
  @IsNotEmpty()
  @IsDateString()
  public timestamp: string

  @IsNotEmpty()
  @IsEnum(TriggerReasonEnum)
  public triggerReason: TriggerReasonEnum

  /**
   * Incremental sequence number, helps with determining if all messages of a transaction have been received.
   */
  @IsNotEmpty()
  @IsInt()
  public seqNo: number

  /**
   * Indication that this transaction event happened when the Charging Station was offline. Default = false, meaning: the event occurred when the Charging Station was online.
   */
  @IsOptional()
  @IsBoolean()
  public offline!: boolean

  /**
   * If the Charging Station is able to report the number of phases used, then it SHALL provide it. When omitted the CSMS may be able to determine the number of phases used via device management.
   */
  @IsOptional()
  @IsInt()
  public numberOfPhasesUsed!: number

  /**
   * The maximum current of the connected cable in Ampere (A).
   */
  @IsOptional()
  @IsInt()
  public cableMaxCurrent!: number

  /**
   * This contains the Id of the reservation that terminates as a result of this transaction.
   */
  @IsOptional()
  @IsInt()
  public reservationId!: number

  @IsNotEmpty()
  @ValidateNested()
  public transactionInfo: TransactionDto

  @IsOptional()
  @ValidateNested()
  public evse!: EvseDto

  @IsOptional()
  @ValidateNested()
  public idToken!: IdTokenDto
}
