// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { CostDto } from './cost.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Consumption_ Cost
 * urn:x-oca:ocpp:uid:2:233259
 */
export class ConsumptionCostDto {
  public constructor(
    startValue: number,
    cost: CostDto[],
  ) {
    this.startValue = startValue
    this.cost = cost
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Consumption_ Cost. Start_ Value. Numeric
   * urn:x-oca:ocpp:uid:1:569246
   * The lowest level of consumption that defines the starting point of this consumption block. The block interval extends to the start of the next interval.
   */
  @IsNotEmpty()
  @IsNumber()
  public startValue: number

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public cost: CostDto[]
}
