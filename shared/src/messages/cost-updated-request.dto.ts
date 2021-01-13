// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class CostUpdatedRequestDto implements IRequestMessage {
  public constructor(
    totalCost: number,
    transactionId: string,
  ) {
    this.totalCost = totalCost
    this.transactionId = transactionId
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Current total cost, based on the information known by the CSMS, of the transaction including taxes. In the currency configured with the configuration Variable: [<<configkey-currency, Currency>>]
   */
  @IsNotEmpty()
  @IsNumber()
  public totalCost: number

  /**
   * Transaction Id of the transaction the current cost are asked for.
   */
  @IsNotEmpty()
  @MaxLength(36)
  @IsString()
  public transactionId: string
}
