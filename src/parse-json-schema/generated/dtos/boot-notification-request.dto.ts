// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { BootReasonEnum } from '../enums/boot-reason.enum'
import { ChargingStationDto } from './charging-station.dto'
import { CustomDataDto } from './custom-data.dto'

export class BootNotificationRequestDto {
  public constructor(
    chargingStation: ChargingStationDto,
    reason: BootReasonEnum,
  ) {
    this.chargingStation = chargingStation
    this.reason = reason
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public chargingStation: ChargingStationDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(BootReasonEnum)
  public reason: BootReasonEnum
}
