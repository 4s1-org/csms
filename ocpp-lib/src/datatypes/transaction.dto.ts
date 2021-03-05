// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

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
  private _className: "TransactionDto" = "TransactionDto"

  public constructor(
    transactionId: string,
  ) {
    super()
    this.transactionId = transactionId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This contains the Id of the transaction.
   */
  public transactionId: string

  public chargingState!: ChargingStateEnum

  /**
   * Transaction. Time_ Spent_ Charging. Elapsed_ Time
   * urn:x-oca:ocpp:uid:1:569415
   * Contains the total time that energy flowed from EVSE to EV during the transaction (in seconds). Note that timeSpentCharging is smaller or equal to the duration of the transaction.
   */
  public timeSpentCharging!: number

  public stoppedReason!: ReasonEnum

  /**
   * The ID given to remote start request (<<requeststarttransactionrequest, RequestStartTransactionRequest>>. This enables to CSMS to match the started transaction to the given start request.
   */
  public remoteStartId!: number
}
