// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingStationDto } from './charging-station.dto'
import { BootReasonEnum } from '../enums/boot-reason.enum'

export class BootNotificationRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public chargingStation!: ChargingStationDto

  @ApiProperty()
  @IsNotEmpty()
  public reason!: BootReasonEnum
}
