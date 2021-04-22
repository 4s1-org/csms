// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class CostUpdatedRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: 'CostUpdatedRequestDto' = 'CostUpdatedRequestDto'

  public constructor(
    totalCost: number,
    transactionId: string,
  ) {
    super()
    this.totalCost = totalCost
    this.transactionId = transactionId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Current total cost, based on the information known by the CSMS, of the transaction including taxes. In the currency configured with the configuration Variable: [<<configkey-currency, Currency>>]
   */
  public totalCost: number

  /**
   * Transaction Id of the transaction the current cost are asked for.
   */
  public transactionId: string
}
