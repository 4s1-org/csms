// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { ChargingNeedsDto } from '../datatypes/charging-needs.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class NotifyEvChargingNeedsRequestDto implements IRequestMessage {
  public constructor(
    chargingNeeds: ChargingNeedsDto,
    evseId: number,
  ) {
    this.chargingNeeds = chargingNeeds
    this.evseId = evseId
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Contains the maximum schedule tuples the car supports per schedule.
   */
  @IsOptional()
  @IsInt()
  public maxScheduleTuples!: number

  @IsNotEmpty()
  @ValidateNested()
  public chargingNeeds: ChargingNeedsDto

  /**
   * Defines the EVSE and connector to which the EV is connected. EvseId may not be 0.
   */
  @IsNotEmpty()
  @IsInt()
  public evseId: number
}
