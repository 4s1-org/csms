// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsBoolean } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { TransactionEventEnum } from '../enums/transaction-event.enum'
import { TriggerReasonEnum } from '../enums/trigger-reason.enum'
import { TransactionDto } from './transaction.dto'
import { EVSEDto } from './evse.dto'
import { IdTokenDto } from './id-token.dto'

export class TransactionEventRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public eventType!: TransactionEventEnum

  @ApiProperty()
  @IsOptional()
  public meterValue!: any

  /**
   * The date and time at which this transaction event occurred.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public timestamp!: string

  @ApiProperty()
  @IsNotEmpty()
  public triggerReason!: TriggerReasonEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public seqNo!: number

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public offline!: boolean

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public numberOfPhasesUsed!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public cableMaxCurrent!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public reservationId!: number

  @ApiProperty()
  @IsNotEmpty()
  public transactionInfo!: TransactionDto

  @ApiProperty()
  @IsOptional()
  public evse!: EVSEDto

  @ApiProperty()
  @IsOptional()
  public idToken!: IdTokenDto
}
