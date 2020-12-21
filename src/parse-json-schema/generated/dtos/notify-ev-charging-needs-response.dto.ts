// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { NotifyEVChargingNeedsStatusEnum } from '../enums/notify-ev-charging-needs-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class NotifyEVChargingNeedsResponseDto {
  public constructor(
    status: NotifyEVChargingNeedsStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(NotifyEVChargingNeedsStatusEnum)
  public status: NotifyEVChargingNeedsStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
