// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsDateString, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingScheduleDto } from '../datatypes/charging-schedule.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class NotifyEvChargingScheduleRequestDto extends RequestBaseDto {
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

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Periods contained in the charging profile are relative to this point in time.
   */
  @IsNotEmpty()
  @IsDateString()
  public timeBase: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ChargingScheduleDto)
  public chargingSchedule: ChargingScheduleDto

  /**
   * The charging schedule contained in this notification applies to an EVSE. EvseId must be > 0.
   */
  @IsNotEmpty()
  @IsInt()
  public evseId: number
}
