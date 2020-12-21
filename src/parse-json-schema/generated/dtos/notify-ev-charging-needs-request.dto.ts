// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ChargingNeedsDto } from './charging-needs.dto'
import { CustomDataDto } from './custom-data.dto'

export class NotifyEVChargingNeedsRequestDto {
  public constructor(
    chargingNeeds: ChargingNeedsDto,
    evseId: number,
  ) {
    this.chargingNeeds = chargingNeeds
    this.evseId = evseId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Contains the maximum schedule tuples the car supports per schedule.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public maxScheduleTuples!: number

  @ApiProperty()
  @IsNotEmpty()
  public chargingNeeds: ChargingNeedsDto

  /**
   * Defines the EVSE and connector to which the EV is connected. EvseId may not be 0.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId: number
}
