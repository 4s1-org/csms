// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingLimitDto } from './charging-limit.dto'

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
  public chargingSchedule!: any

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
