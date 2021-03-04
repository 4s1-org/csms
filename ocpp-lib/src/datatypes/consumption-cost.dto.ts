// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CostDto } from './cost.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Consumption_ Cost
 * urn:x-oca:ocpp:uid:2:233259
 */
export class ConsumptionCostDto extends DatatypeBaseDto {
  private _className: "ConsumptionCostDto" = "ConsumptionCostDto"

  public constructor(
    startValue: number,
    cost: CostDto[],
  ) {
    super()
    this.startValue = startValue
    this.cost = cost
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Consumption_ Cost. Start_ Value. Numeric
   * urn:x-oca:ocpp:uid:1:569246
   * The lowest level of consumption that defines the starting point of this consumption block. The block interval extends to the start of the next interval.
   */
  public startValue: number

  @Type(() => CostDto)
  public cost: CostDto[]
}
