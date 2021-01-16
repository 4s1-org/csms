// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenInfoDto } from '../datatypes/id-token-info.dto'
import { MessageContentDto } from '../datatypes/message-content.dto'

export class TransactionEventResponseDto extends ResponseBaseDto {
  public constructor() {
    super()
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * SHALL only be sent when charging has ended. Final total cost of this transaction, including taxes. In the currency configured with the Configuration Variable: <<configkey-currency,`Currency`>>. When omitted, the transaction was NOT free. To indicate a free transaction, the CSMS SHALL send 0.00.
   */
  @IsOptional()
  @IsNumber()
  public totalCost!: number

  /**
   * Priority from a business point of view. Default priority is 0, The range is from -9 to 9. Higher values indicate a higher priority. The chargingPriority in <<transactioneventresponse,TransactionEventResponse>> is temporarily, so it may not be set in the <<cmn_idtokeninfotype,IdTokenInfoType>> afterwards. Also the chargingPriority in <<transactioneventresponse,TransactionEventResponse>> overrules the one in <<cmn_idtokeninfotype,IdTokenInfoType>>.
   */
  @IsOptional()
  @IsInt()
  public chargingPriority!: number

  @IsOptional()
  @ValidateNested()
  @Type(() => IdTokenInfoDto)
  public idTokenInfo!: IdTokenInfoDto

  @IsOptional()
  @ValidateNested()
  @Type(() => MessageContentDto)
  public updatedPersonalMessage!: MessageContentDto
}
