// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { TransactionEventEnum } from '../enums/transaction-event.enum'
import { TriggerReasonEnum } from '../enums/trigger-reason.enum'
import { TransactionDto } from './transaction.dto'
import { EVSEDto } from './evse.dto'
import { IdTokenDto } from './id-token.dto'

export class TransactionEventRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public eventType!: TransactionEventEnum

  @IsOptional()
  @ApiProperty()
  public meterValue!: any

  /**
   * The date and time at which this transaction event occurred.
   */
  @IsNotEmpty()
  @ApiProperty()
  public timestamp!: string

  @IsNotEmpty()
  @ApiProperty()
  public triggerReason!: TriggerReasonEnum

  @IsNotEmpty()
  @ApiProperty()
  public seqNo!: number

  @IsOptional()
  @ApiProperty()
  public offline!: boolean

  @IsOptional()
  @ApiProperty()
  public numberOfPhasesUsed!: number

  @IsOptional()
  @ApiProperty()
  public cableMaxCurrent!: number

  @IsOptional()
  @ApiProperty()
  public reservationId!: number

  @IsNotEmpty()
  @ApiProperty()
  public transactionInfo!: TransactionDto

  @IsOptional()
  @ApiProperty()
  public evse!: EVSEDto

  @IsOptional()
  @ApiProperty()
  public idToken!: IdTokenDto
}
