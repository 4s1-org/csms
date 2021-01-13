// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { ChargingLimitDto } from '../datatypes/charging-limit.dto'
import { ChargingScheduleDto } from '../datatypes/charging-schedule.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class NotifyChargingLimitRequestDto implements IRequestMessage {
  public constructor(
    chargingLimit: ChargingLimitDto,
  ) {
    this.chargingLimit = chargingLimit
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @ArrayMinSize(1)
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
  @ValidateNested()
  public chargingLimit: ChargingLimitDto
}
