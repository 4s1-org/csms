// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CancelReservationStatusEnum } from '../enums/cancel-reservation-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class CancelReservationResponseDto {
  public constructor (
    status: CancelReservationStatusEnum
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(CancelReservationStatusEnum)
  public status: CancelReservationStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
