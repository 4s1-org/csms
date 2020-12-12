// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingStationDto } from './charging-station.dto'
import { BootReasonEnum } from '../enums/boot-reason.enum'

export class BootNotificationRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public chargingStation!: ChargingStationDto

  @IsNotEmpty()
  @ApiProperty()
  public reason!: BootReasonEnum
}
