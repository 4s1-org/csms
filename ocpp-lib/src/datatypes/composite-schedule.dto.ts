// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ChargingRateUnitEnum } from '../enumerations/charging-rate-unit.enum'
import { ChargingSchedulePeriodDto } from './charging-schedule-period.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Composite_ Schedule
 * urn:x-oca:ocpp:uid:2:233362
 */
export class CompositeScheduleDto extends DatatypeBaseDto {
  @Exclude()
  private _className: 'CompositeScheduleDto' = 'CompositeScheduleDto'

  public constructor(
    chargingSchedulePeriod: ChargingSchedulePeriodDto[],
    evseId: number,
    duration: number,
    scheduleStart: string,
    chargingRateUnit: ChargingRateUnitEnum,
  ) {
    super()
    this.chargingSchedulePeriod = chargingSchedulePeriod
    this.evseId = evseId
    this.duration = duration
    this.scheduleStart = scheduleStart
    this.chargingRateUnit = chargingRateUnit
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => ChargingSchedulePeriodDto)
  public chargingSchedulePeriod: ChargingSchedulePeriodDto[]

  /**
   * The ID of the EVSE for which the
   * schedule is requested. When evseid=0, the
   * Charging Station calculated the expected
   * consumption for the grid connection.
   */
  public evseId: number

  /**
   * Duration of the schedule in seconds.
   */
  public duration: number

  /**
   * Composite_ Schedule. Start. Date_ Time
   * urn:x-oca:ocpp:uid:1:569456
   * Date and time at which the schedule becomes active. All time measurements within the schedule are relative to this timestamp.
   */
  public scheduleStart: string

  public chargingRateUnit: ChargingRateUnitEnum
}
