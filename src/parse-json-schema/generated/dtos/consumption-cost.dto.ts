// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Consumption_ Cost
urn:x-oca:ocpp:uid:2:233259
 */
export class ConsumptionCostDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public startValue!: number

  @IsNotEmpty()
  @ApiProperty()
  public cost!: any
}
