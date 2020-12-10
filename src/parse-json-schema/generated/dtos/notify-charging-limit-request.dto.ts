// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingLimitDto } from './charging-limit.dto'

export class NotifyChargingLimitRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public chargingSchedule: any

  @IsOptional()
  @ApiProperty()
  public evseId: number

  @ApiProperty()
  public chargingLimit: ChargingLimitDto
}
