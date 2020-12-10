// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { GenericStatusEnum } from '../enums/generic-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class PublishFirmwareResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: GenericStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto
}
