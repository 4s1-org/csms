// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class CostUpdatedRequestDto extends RequestBaseDto {
  public constructor(
    totalCost: number,
    transactionId: string,
  ) {
    super()
    this.totalCost = totalCost
    this.transactionId = transactionId
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
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
