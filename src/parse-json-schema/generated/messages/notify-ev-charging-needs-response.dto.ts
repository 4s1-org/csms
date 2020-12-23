// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { NotifyEVChargingNeedsStatusEnum } from '../enums/notify-ev-charging-needs-status.enum'
import { StatusInfoDto } from '../dtos/status-info.dto'

export class NotifyEVChargingNeedsResponseDto {
  public constructor(
    status: NotifyEVChargingNeedsStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(NotifyEVChargingNeedsStatusEnum)
  public status: NotifyEVChargingNeedsStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
