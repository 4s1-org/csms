// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ChargingProfileStatusEnum } from '../enums/charging-profile-status.enum'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { StatusInfoDto } from '../dtos/status-info.dto'

export class SetChargingProfileResponseDto {
  public constructor(
    status: ChargingProfileStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChargingProfileStatusEnum)
  public status: ChargingProfileStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
