// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNumber, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenInfoDto } from './id-token-info.dto'
import { MessageContentDto } from './message-content.dto'

export class TransactionEventResponseDto {

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * SHALL only be sent when charging has ended. Final total cost of this transaction, including taxes. In the currency configured with the Configuration Variable: <<configkey-currency,`Currency`>>. When omitted, the transaction was NOT free. To indicate a free transaction, the CSMS SHALL send 0.00.
   */
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  public totalCost!: number

  /**
   * Priority from a business point of view. Default priority is 0, The range is from -9 to 9. Higher values indicate a higher priority. The chargingPriority in <<transactioneventresponse,TransactionEventResponse>> is temporarily, so it may not be set in the <<cmn_idtokeninfotype,IdTokenInfoType>> afterwards. Also the chargingPriority in <<transactioneventresponse,TransactionEventResponse>> overrules the one in <<cmn_idtokeninfotype,IdTokenInfoType>>.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public chargingPriority!: number

  @ApiProperty()
  @IsOptional()
  public idTokenInfo!: IdTokenInfoDto

  @ApiProperty()
  @IsOptional()
  public updatedPersonalMessage!: MessageContentDto
}
