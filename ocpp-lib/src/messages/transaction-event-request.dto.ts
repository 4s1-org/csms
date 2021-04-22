// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { EvseDto } from '../datatypes/evse.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'
import { MeterValueDto } from '../datatypes/meter-value.dto'
import { TransactionDto } from '../datatypes/transaction.dto'
import { TransactionEventEnum } from '../enumerations/transaction-event.enum'
import { TriggerReasonEnum } from '../enumerations/trigger-reason.enum'

/**
 * This section contains the field definition of the TransactionEventRequest PDU sent by the Charging Station to the CSMS. For each of the eventTypes; Started, Updated and Ended, the corresponding cardinality is specified.
 */
export class TransactionEventRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: 'TransactionEventRequestDto' = 'TransactionEventRequestDto'

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

  /**
   * This contains the type of this event. The first TransactionEvent of a transaction SHALL contain: "Started" The last TransactionEvent of a transaction SHALL contain: "Ended" All others SHALL contain: "Updated"
   * Required: true
   * TransactionEventEnumType
   * 1..1
   */
  public eventType: TransactionEventEnum

  /**
   * This contains the relevant meter values. Depending on the EventType of this TransactionEvent the following Configuration Variable is used to configure the content: Started: SampledDataTxStartedMeasurands, Updated: SampledDataTxUpdatedMeasurands, Ended: SampledDataTxEndedMeasurands & AlignedDataTxEndedMeasurands
   * Required: false
   * MeterValueType
   * 0..*
   */
  @Type(() => MeterValueDto)
  public meterValue!: MeterValueDto[]

  /**
   * The date and time at which this transaction event occurred.
   * Required: true
   * dateTime
   * 1..1
   */
  public timestamp: string

  /**
   * Reason the Charging Station sends this message to the CSMS
   * Required: true
   * TriggerReasonEnumType
   * 1..1
   */
  public triggerReason: TriggerReasonEnum

  /**
   * Incremental sequence number, helps with determining if all messages of a transaction have been received.
   * Required: true
   * integer
   * 1..1
   */
  public seqNo: number

  /**
   * Indication that this transaction event happened when the Charging Station was offline. Default = false, meaning: the event occurred when the Charging Station was online.
   * Required: false
   * boolean
   * 0..1
   */
  public offline!: boolean

  /**
   * If the Charging Station is able to report the number of phases used, then it SHALL provide it. When omitted the CSMS may be able to determine the number of phases used via device management.
   * Required: false
   * integer
   * 0..1
   */
  public numberOfPhasesUsed!: number

  /**
   * The maximum current of the connected cable in Ampere (A).
   * Required: false
   * integer
   * 0..1
   */
  public cableMaxCurrent!: number

  /**
   * This contains the Id of the reservation that terminates as a result of this transaction.
   * Required: false
   * integer
   * 0..1
   */
  public reservationId!: number

  /**
   * Contains transaction specific information.
   * Required: true
   * TransactionType
   * 1..1
   */
  @Type(() => TransactionDto)
  public transactionInfo: TransactionDto

  /**
   * This identifies which evse (and connector) of the Charging Station is used.
   * Required: false
   * EVSEType
   * 0..1
   */
  @Type(() => EvseDto)
  public evse!: EvseDto

  /**
   * This contains the identifier for which a transaction has to be/was started. Is required when the EV Driver becomes authorized for this transaction. The IdToken should only be send once in a TransactionEventRequest for every authorization done for this transaction.
   * Required: false
   * IdTokenType
   * 0..1
   */
  @Type(() => IdTokenDto)
  public idToken!: IdTokenDto
}
