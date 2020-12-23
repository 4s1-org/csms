// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { GenericDeviceModelStatusEnum } from '../enumerations/generic-device-model-status.enum'
import { StatusInfoDto } from '../types/status-info.dto'

export class SetMonitoringBaseResponseDto {
  public constructor(
    status: GenericDeviceModelStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GenericDeviceModelStatusEnum)
  public status: GenericDeviceModelStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
