// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { ReservationUpdateStatusEnum } from '../enums/reservation-update-status.enum'

export class ReservationStatusUpdateRequestDto {
  public constructor(
    reservationId: number,
    reservationUpdateStatus: ReservationUpdateStatusEnum,
  ) {
    this.reservationId = reservationId
    this.reservationUpdateStatus = reservationUpdateStatus
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * The ID of the reservation.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public reservationId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ReservationUpdateStatusEnum)
  public reservationUpdateStatus: ReservationUpdateStatusEnum
}
