// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingRateUnitEnum } from '../enums/charging-rate-unit.enum'

/**
 * Composite_ Schedule
urn:x-oca:ocpp:uid:2:233362
 */
export class CompositeScheduleDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public chargingSchedulePeriod!: any

  @IsNotEmpty()
  @ApiProperty()
  public evseId!: number

  @IsNotEmpty()
  @ApiProperty()
  public duration!: number

  /**
   * Composite_ Schedule. Start. Date_ Time
urn:x-oca:ocpp:uid:1:569456
Date and time at which the schedule becomes active. All time measurements within the schedule are relative to this timestamp.
   */
  @IsNotEmpty()
  @ApiProperty()
  public scheduleStart!: string

  @IsNotEmpty()
  @ApiProperty()
  public chargingRateUnit!: ChargingRateUnitEnum
}
