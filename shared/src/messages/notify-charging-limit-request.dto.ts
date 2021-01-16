// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingLimitDto } from '../datatypes/charging-limit.dto'
import { ChargingScheduleDto } from '../datatypes/charging-schedule.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class NotifyChargingLimitRequestDto extends RequestBaseDto {
  public constructor(
    chargingLimit: ChargingLimitDto,
  ) {
    super()
    this.chargingLimit = chargingLimit
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @ArrayMinSize(1)
  @Type(() => ChargingScheduleDto)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public chargingSchedule!: ChargingScheduleDto[]

  /**
   * The charging schedule contained in this notification applies to an EVSE. evseId must be > 0.
   */
  @IsOptional()
  @IsInt()
  public evseId!: number

  @IsNotEmpty()
  @Type(() => ChargingLimitDto)
  @ValidateNested()
  public chargingLimit: ChargingLimitDto
}
