// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { UnpublishFirmwareStatusEnum } from '../enumerations/unpublish-firmware-status.enum'

export class UnpublishFirmwareResponseDto {
  public constructor(
    status: UnpublishFirmwareStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UnpublishFirmwareStatusEnum)
  public status: UnpublishFirmwareStatusEnum
}
