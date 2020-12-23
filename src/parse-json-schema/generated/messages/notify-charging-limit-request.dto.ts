// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ChargingLimitDto } from '../types/charging-limit.dto'
import { ChargingScheduleDto } from '../types/charging-schedule.dto'
import { CustomDataDto } from '../types/custom-data.dto'

export class NotifyChargingLimitRequestDto {
  public constructor(
    chargingLimit: ChargingLimitDto,
  ) {
    this.chargingLimit = chargingLimit
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
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
  @ValidateNested()
  public chargingLimit: ChargingLimitDto
}
