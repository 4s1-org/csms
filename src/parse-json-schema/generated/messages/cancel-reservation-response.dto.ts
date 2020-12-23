// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CancelReservationStatusEnum } from '../enums/cancel-reservation-status.enum'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { StatusInfoDto } from '../dtos/status-info.dto'

export class CancelReservationResponseDto {
  public constructor(
    status: CancelReservationStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(CancelReservationStatusEnum)
  public status: CancelReservationStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
