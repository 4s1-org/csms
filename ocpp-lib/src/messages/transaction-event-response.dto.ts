// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenInfoDto } from '../datatypes/id-token-info.dto'
import { MessageContentDto } from '../datatypes/message-content.dto'

/**
 * This contains the field definition of the TransactionEventResponse PDU sent by the CSMS to the Charging Station in response to a TransactionEventRequest.
 */
export class TransactionEventResponseDto extends ResponseBaseDto {
  private _className: "TransactionEventResponseDto" = "TransactionEventResponseDto"

  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * SHALL only be sent when charging has ended. Final total cost of this transaction, including taxes. In the currency configured with the Configuration Variable: Currency. When omitted, the transaction was NOT free. To indicate a free transaction, the CSMS SHALL send 0.00.
   * Required: false
   * decimal
   * 0..1
   */
  public totalCost!: number

  /**
   * Priority from a business point of view. Default priority is 0, The range is from -9 to 9. Higher values indicate a higher priority. The chargingPriority in TransactionEventResponse is temporarily, so it may not be set in the IdTokenInfoType afterwards. Also the chargingPriority in TransactionEventResponse overrules the one in IdTokenInfoType.
   * Required: false
   * integer
   * 0..1
   */
  public chargingPriority!: number

  /**
   * This contains information about authorization status, expiry and group id. Is required when the transactionEventRequest contained an idToken.
   * Required: false
   * IdTokenInfoType
   * 0..1
   */
  @Type(() => IdTokenInfoDto)
  public idTokenInfo!: IdTokenInfoDto

  /**
   * This can contain updated personal message that can be shown to the EV Driver. This can be used to provide updated tariff information.
   * Required: false
   * MessageContentType
   * 0..1
   */
  @Type(() => MessageContentDto)
  public updatedPersonalMessage!: MessageContentDto
}
