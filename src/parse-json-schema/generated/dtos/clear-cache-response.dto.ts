// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ClearCacheStatusEnum } from '../enums/clear-cache-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class ClearCacheResponseDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public status!: ClearCacheStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
