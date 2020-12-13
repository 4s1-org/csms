// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingScheduleDto } from './charging-schedule.dto'

export class NotifyEVChargingScheduleRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Periods contained in the charging profile are relative to this point in time.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public timeBase!: string

  @ApiProperty()
  @IsNotEmpty()
  public chargingSchedule!: ChargingScheduleDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId!: number
}
