// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Consumption_ Cost
urn:x-oca:ocpp:uid:2:233259
 */
export class ConsumptionCostDto {
  public constructor(
    startValue: number,
    cost: any
  ) {
    this.startValue = startValue
    this.cost = cost
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public startValue: number

  @ApiProperty()
  @IsNotEmpty()
  public cost: any
}
