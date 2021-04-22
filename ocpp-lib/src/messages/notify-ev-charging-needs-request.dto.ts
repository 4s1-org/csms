// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingNeedsDto } from '../datatypes/charging-needs.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class NotifyEvChargingNeedsRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: 'NotifyEvChargingNeedsRequestDto' = 'NotifyEvChargingNeedsRequestDto'

  public constructor(
    chargingNeeds: ChargingNeedsDto,
    evseId: number,
  ) {
    super()
    this.chargingNeeds = chargingNeeds
    this.evseId = evseId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Contains the maximum schedule tuples the car supports per schedule.
   */
  public maxScheduleTuples!: number

  @Type(() => ChargingNeedsDto)
  public chargingNeeds: ChargingNeedsDto

  /**
   * Defines the EVSE and connector to which the EV is connected. EvseId may not be 0.
   */
  public evseId: number
}
