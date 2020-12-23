// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ChangeAvailabilityStatusEnum } from '../enumerations/change-availability-status.enum'
import { CustomDataDto } from '../types/custom-data.dto'
import { StatusInfoDto } from '../types/status-info.dto'

export class ChangeAvailabilityResponseDto {
  public constructor(
    status: ChangeAvailabilityStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChangeAvailabilityStatusEnum)
  public status: ChangeAvailabilityStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
