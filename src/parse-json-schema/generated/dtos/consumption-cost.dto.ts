// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
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

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Consumption_ Cost. Start_ Value. Numeric
   * urn:x-oca:ocpp:uid:1:569246
   * The lowest level of consumption that defines the starting point of this consumption block. The block interval extends to the start of the next interval.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public startValue: number

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  public cost: CostDto[]
}
