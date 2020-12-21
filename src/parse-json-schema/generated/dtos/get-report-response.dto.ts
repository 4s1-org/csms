// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { GenericDeviceModelStatusEnum } from '../enums/generic-device-model-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class GetReportResponseDto {
  public constructor(
    status: GenericDeviceModelStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GenericDeviceModelStatusEnum)
  public status: GenericDeviceModelStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
