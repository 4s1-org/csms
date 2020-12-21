// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingProfileStatusEnum } from '../enums/charging-profile-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class SetChargingProfileResponseDto {
  public constructor(
    status: ChargingProfileStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChargingProfileStatusEnum)
  public status: ChargingProfileStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
