// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { ChangeAvailabilityStatusEnum } from '../enums/change-availability-status.enum'
import { CustomDataDto } from './custom-data.dto'
import { StatusInfoDto } from './status-info.dto'

export class ChangeAvailabilityResponseDto {
  public constructor(
    status: ChangeAvailabilityStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChangeAvailabilityStatusEnum)
  public status: ChangeAvailabilityStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
