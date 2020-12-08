import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingRateUnitEnumDto } from './charging-rate-unit-enum.dto'

/**
 * Composite_ Schedule
urn:x-oca:ocpp:uid:2:233362
 */
export class CompositeScheduleDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public chargingSchedulePeriod: any

  @ApiProperty()
  public evseId: number

  @ApiProperty()
  public duration: number

  /**
   * Composite_ Schedule. Start. Date_ Time
urn:x-oca:ocpp:uid:1:569456
Date and time at which the schedule becomes active. All time measurements within the schedule are relative to this timestamp.
   */
  @ApiProperty()
  public scheduleStart: string

  @ApiProperty()
  public chargingRateUnit: ChargingRateUnitEnumDto
}
