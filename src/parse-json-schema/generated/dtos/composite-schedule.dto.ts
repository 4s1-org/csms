// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingRateUnitEnum } from '../enums/charging-rate-unit.enum'

/**
 * Composite_ Schedule
urn:x-oca:ocpp:uid:2:233362
 */
export class CompositeScheduleDto {
  public constructor(
    chargingSchedulePeriod: any,
    evseId: number,
    duration: number,
    scheduleStart: string,
    chargingRateUnit: ChargingRateUnitEnum
  ) {
    this.chargingSchedulePeriod = chargingSchedulePeriod
    this.evseId = evseId
    this.duration = duration
    this.scheduleStart = scheduleStart
    this.chargingRateUnit = chargingRateUnit
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public chargingSchedulePeriod: any

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public duration: number

  /**
   * Composite_ Schedule. Start. Date_ Time
urn:x-oca:ocpp:uid:1:569456
Date and time at which the schedule becomes active. All time measurements within the schedule are relative to this timestamp.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public scheduleStart: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChargingRateUnitEnum)
  public chargingRateUnit: ChargingRateUnitEnum
}
