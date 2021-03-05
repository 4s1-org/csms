// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingRateUnitEnum } from '../enumerations/charging-rate-unit.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetCompositeScheduleRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: "GetCompositeScheduleRequestDto" = "GetCompositeScheduleRequestDto"

  public constructor(
    duration: number,
    evseId: number,
  ) {
    super()
    this.duration = duration
    this.evseId = evseId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Length of the requested schedule in seconds.
   */
  public duration: number

  public chargingRateUnit!: ChargingRateUnitEnum

  /**
   * The ID of the EVSE for which the schedule is requested. When evseid=0, the Charging Station will calculate the expected consumption for the grid connection.
   */
  public evseId: number
}
