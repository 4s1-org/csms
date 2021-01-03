// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { NotifyEvChargingNeedsStatusEnum } from '../enumerations/notify-ev-charging-needs-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class NotifyEvChargingNeedsResponseDto {
  public constructor(
    status: NotifyEvChargingNeedsStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(NotifyEvChargingNeedsStatusEnum)
  public status: NotifyEvChargingNeedsStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
