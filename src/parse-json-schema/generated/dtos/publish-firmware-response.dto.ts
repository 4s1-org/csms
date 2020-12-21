// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { GenericStatusEnum } from '../enums/generic-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class PublishFirmwareResponseDto {
  public constructor(
    status: GenericStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GenericStatusEnum)
  public status: GenericStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
