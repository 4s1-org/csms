// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingStationDto } from './charging-station.dto'
import { BootReasonEnum } from '../enums/boot-reason.enum'

export class BootNotificationRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public chargingStation: ChargingStationDto

  @ApiProperty()
  public reason: BootReasonEnum
}
