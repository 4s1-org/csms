// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ReservationUpdateStatusEnum } from '../enums/reservation-update-status.enum'

export class ReservationStatusUpdateRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public reservationId!: number

  @IsNotEmpty()
  @ApiProperty()
  public reservationUpdateStatus!: ReservationUpdateStatusEnum
}
