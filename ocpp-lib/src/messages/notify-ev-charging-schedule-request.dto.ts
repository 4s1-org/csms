// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingScheduleDto } from '../datatypes/charging-schedule.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class NotifyEvChargingScheduleRequestDto extends RequestBaseDto {
  private _className: "NotifyEvChargingScheduleRequestDto" = "NotifyEvChargingScheduleRequestDto"

  public constructor(
    timeBase: string,
    chargingSchedule: ChargingScheduleDto,
    evseId: number,
  ) {
    super()
    this.timeBase = timeBase
    this.chargingSchedule = chargingSchedule
    this.evseId = evseId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Periods contained in the charging profile are relative to this point in time.
   */
  public timeBase: string

  @Type(() => ChargingScheduleDto)
  public chargingSchedule: ChargingScheduleDto

  /**
   * The charging schedule contained in this notification applies to an EVSE. EvseId must be > 0.
   */
  public evseId: number
}
