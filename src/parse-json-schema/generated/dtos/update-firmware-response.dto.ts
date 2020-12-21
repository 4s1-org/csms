// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { StatusInfoDto } from './status-info.dto'
import { UpdateFirmwareStatusEnum } from '../enums/update-firmware-status.enum'

export class UpdateFirmwareResponseDto {
  public constructor(
    status: UpdateFirmwareStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UpdateFirmwareStatusEnum)
  public status: UpdateFirmwareStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
