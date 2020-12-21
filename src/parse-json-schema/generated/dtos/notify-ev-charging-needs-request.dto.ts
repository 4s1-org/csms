// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingNeedsDto } from './charging-needs.dto'

export class NotifyEVChargingNeedsRequestDto {
  public constructor(
    chargingNeeds: ChargingNeedsDto,
    evseId: number
  ) {
    this.chargingNeeds = chargingNeeds
    this.evseId = evseId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public maxScheduleTuples!: number

  @ApiProperty()
  @IsNotEmpty()
  public chargingNeeds: ChargingNeedsDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId: number
}
