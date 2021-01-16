// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingNeedsDto } from '../datatypes/charging-needs.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class NotifyEvChargingNeedsRequestDto extends RequestBaseDto {
  public constructor(
    chargingNeeds: ChargingNeedsDto,
    evseId: number,
  ) {
    super()
    this.chargingNeeds = chargingNeeds
    this.evseId = evseId
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Contains the maximum schedule tuples the car supports per schedule.
   */
  @IsOptional()
  @IsInt()
  public maxScheduleTuples!: number

  @IsNotEmpty()
  @Type(() => ChargingNeedsDto)
  @ValidateNested()
  public chargingNeeds: ChargingNeedsDto

  /**
   * Defines the EVSE and connector to which the EV is connected. EvseId may not be 0.
   */
  @IsNotEmpty()
  @IsInt()
  public evseId: number
}
