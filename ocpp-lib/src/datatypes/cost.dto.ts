// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CostKindEnum } from '../enumerations/cost-kind.enum'
import { CustomDataDto } from './custom-data.dto'

/**
 * Cost
 * urn:x-oca:ocpp:uid:2:233258
 */
export class CostDto extends DatatypeBaseDto {
  @Exclude()
  private _className: "CostDto" = "CostDto"

  public constructor(
    costKind: CostKindEnum,
    amount: number,
  ) {
    super()
    this.costKind = costKind
    this.amount = amount
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public costKind: CostKindEnum

  /**
   * Cost. Amount. Amount
   * urn:x-oca:ocpp:uid:1:569244
   * The estimated or actual cost per kWh
   */
  public amount: number

  /**
   * Cost. Amount_ Multiplier. Integer
   * urn:x-oca:ocpp:uid:1:569245
   * Values: -3..3, The amountMultiplier defines the exponent to base 10 (dec). The final value is determined by: amount * 10 ^ amountMultiplier
   */
  public amountMultiplier!: number
}
