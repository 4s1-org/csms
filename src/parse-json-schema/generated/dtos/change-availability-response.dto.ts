// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChangeAvailabilityStatusEnum } from '../enums/change-availability-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class ChangeAvailabilityResponseDto {
  public constructor (
    status: ChangeAvailabilityStatusEnum
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
