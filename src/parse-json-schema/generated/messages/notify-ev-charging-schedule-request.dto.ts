// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ChargingScheduleDto } from '../types/charging-schedule.dto'
import { CustomDataDto } from '../types/custom-data.dto'

export class NotifyEVChargingScheduleRequestDto {
  public constructor(
    timeBase: string,
    chargingSchedule: ChargingScheduleDto,
    evseId: number,
  ) {
    this.timeBase = timeBase
    this.chargingSchedule = chargingSchedule
    this.evseId = evseId
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Periods contained in the charging profile are relative to this point in time.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  public timeBase: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public chargingSchedule: ChargingScheduleDto

  /**
   * The charging schedule contained in this notification applies to an EVSE. EvseId must be > 0.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId: number
}
