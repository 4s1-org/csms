// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingNeedsDto } from './charging-needs.dto'

export class NotifyEVChargingNeedsRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public maxScheduleTuples: number

  @ApiProperty()
  public chargingNeeds: ChargingNeedsDto

  @ApiProperty()
  public evseId: number
}
