// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { UnpublishFirmwareStatusEnum } from '../enums/unpublish-firmware-status.enum'

export class UnpublishFirmwareResponseDto {
  public constructor(
    status: UnpublishFirmwareStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UnpublishFirmwareStatusEnum)
  public status: UnpublishFirmwareStatusEnum
}
