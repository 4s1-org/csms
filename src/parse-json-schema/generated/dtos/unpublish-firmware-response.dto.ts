// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { UnpublishFirmwareStatusEnum } from '../enums/unpublish-firmware-status.enum'

export class UnpublishFirmwareResponseDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UnpublishFirmwareStatusEnum)
  public status!: UnpublishFirmwareStatusEnum
}
