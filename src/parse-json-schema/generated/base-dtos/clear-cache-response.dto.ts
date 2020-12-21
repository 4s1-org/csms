// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ClearCacheStatusEnum } from '../enums/clear-cache-status.enum'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { StatusInfoDto } from '../dtos/status-info.dto'

export class ClearCacheResponseDto {
  public constructor(
    status: ClearCacheStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ClearCacheStatusEnum)
  public status: ClearCacheStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
