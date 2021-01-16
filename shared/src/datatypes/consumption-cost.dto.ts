// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CostDto } from './cost.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Consumption_ Cost
 * urn:x-oca:ocpp:uid:2:233259
 */
export class ConsumptionCostDto extends DatatypeBaseDto {
  public constructor(
    startValue: number,
    cost: CostDto[],
  ) {
    super()
    this.startValue = startValue
    this.cost = cost
  }

  @IsOptional()
  @Type(() => CustomDataDto)
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
  @Type(() => CostDto)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public cost: CostDto[]
}
