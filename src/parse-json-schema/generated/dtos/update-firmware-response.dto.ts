// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { UpdateFirmwareStatusEnum } from '../enums/update-firmware-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class UpdateFirmwareResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: UpdateFirmwareStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto
}
