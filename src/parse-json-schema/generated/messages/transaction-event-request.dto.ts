// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsBoolean, IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { EVSEDto } from '../types/evse.dto'
import { IdTokenDto } from '../types/id-token.dto'
import { MeterValueDto } from '../types/meter-value.dto'
import { TransactionDto } from '../types/transaction.dto'
import { TransactionEventEnum } from '../enumerations/transaction-event.enum'
import { TriggerReasonEnum } from '../enumerations/trigger-reason.enum'

export class TransactionEventRequestDto {
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

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TransactionEventEnum)
  public eventType: TransactionEventEnum

  @ApiProperty()
  @IsOptional()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public meterValue!: MeterValueDto[]

  /**
   * The date and time at which this transaction event occurred.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  public timestamp: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TriggerReasonEnum)
  public triggerReason: TriggerReasonEnum

  /**
   * Incremental sequence number, helps with determining if all messages of a transaction have been received.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public seqNo: number

  /**
   * Indication that this transaction event happened when the Charging Station was offline. Default = false, meaning: the event occurred when the Charging Station was online.
   */
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public offline!: boolean

  /**
   * If the Charging Station is able to report the number of phases used, then it SHALL provide it. When omitted the CSMS may be able to determine the number of phases used via device management.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public numberOfPhasesUsed!: number

  /**
   * The maximum current of the connected cable in Ampere (A).
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public cableMaxCurrent!: number

  /**
   * This contains the Id of the reservation that terminates as a result of this transaction.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public reservationId!: number

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public transactionInfo: TransactionDto

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public evse!: EVSEDto

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public idToken!: IdTokenDto
}
