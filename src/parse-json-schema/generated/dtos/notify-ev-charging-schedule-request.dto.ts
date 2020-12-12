// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingScheduleDto } from './charging-schedule.dto'

export class NotifyEVChargingScheduleRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  /**
   * Periods contained in the charging profile are relative to this point in time.
   */
  @IsNotEmpty()
  @ApiProperty()
  public timeBase!: string

  @IsNotEmpty()
  @ApiProperty()
  public chargingSchedule!: ChargingScheduleDto

  @IsNotEmpty()
  @ApiProperty()
  public evseId!: number
}
