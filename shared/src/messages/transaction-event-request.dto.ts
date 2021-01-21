// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { EvseDto } from '../datatypes/evse.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'
import { MeterValueDto } from '../datatypes/meter-value.dto'
import { TransactionDto } from '../datatypes/transaction.dto'
import { TransactionEventEnum } from '../enumerations/transaction-event.enum'
import { TriggerReasonEnum } from '../enumerations/trigger-reason.enum'

export class TransactionEventRequestDto extends RequestBaseDto {
  public constructor(
    eventType: TransactionEventEnum,
    timestamp: string,
    triggerReason: TriggerReasonEnum,
    seqNo: number,
    transactionInfo: TransactionDto,
  ) {
    super()
    this.eventType = eventType
    this.timestamp = timestamp
    this.triggerReason = triggerReason
    this.seqNo = seqNo
    this.transactionInfo = transactionInfo
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public eventType: TransactionEventEnum

  @Type(() => MeterValueDto)
  public meterValue!: MeterValueDto[]

  /**
   * The date and time at which this transaction event occurred.
   */
  public timestamp: string

  public triggerReason: TriggerReasonEnum

  /**
   * Incremental sequence number, helps with determining if all messages of a transaction have been received.
   */
  public seqNo: number

  /**
   * Indication that this transaction event happened when the Charging Station was offline. Default = false, meaning: the event occurred when the Charging Station was online.
   */
  public offline!: boolean

  /**
   * If the Charging Station is able to report the number of phases used, then it SHALL provide it. When omitted the CSMS may be able to determine the number of phases used via device management.
   */
  public numberOfPhasesUsed!: number

  /**
   * The maximum current of the connected cable in Ampere (A).
   */
  public cableMaxCurrent!: number

  /**
   * This contains the Id of the reservation that terminates as a result of this transaction.
   */
  public reservationId!: number

  @Type(() => TransactionDto)
  public transactionInfo: TransactionDto

  @Type(() => EvseDto)
  public evse!: EvseDto

  @Type(() => IdTokenDto)
  public idToken!: IdTokenDto
}
