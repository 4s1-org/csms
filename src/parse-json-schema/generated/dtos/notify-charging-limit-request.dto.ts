// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ChargingLimitDto } from './charging-limit.dto'
import { ChargingScheduleDto } from './charging-schedule.dto'
import { CustomDataDto } from './custom-data.dto'

export class NotifyChargingLimitRequestDto {
  public constructor(
    chargingLimit: ChargingLimitDto,
  ) {
    this.chargingLimit = chargingLimit
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  // MinItems: 1
  @IsArray()
  public chargingSchedule!: ChargingScheduleDto[]

  /**
   * The charging schedule contained in this notification applies to an EVSE. evseId must be > 0.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evseId!: number

  @ApiProperty()
  @IsNotEmpty()
  public chargingLimit: ChargingLimitDto
}
