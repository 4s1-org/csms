// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingLimitDto } from '../datatypes/charging-limit.dto'
import { ChargingScheduleDto } from '../datatypes/charging-schedule.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class NotifyChargingLimitRequestDto extends RequestBaseDto {
  public constructor(
    chargingLimit: ChargingLimitDto,
  ) {
    super()
    this.chargingLimit = chargingLimit
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => ChargingScheduleDto)
  public chargingSchedule!: ChargingScheduleDto[]

  /**
   * The charging schedule contained in this notification applies to an EVSE. evseId must be > 0.
   */
  public evseId!: number

  @Type(() => ChargingLimitDto)
  public chargingLimit: ChargingLimitDto
}
