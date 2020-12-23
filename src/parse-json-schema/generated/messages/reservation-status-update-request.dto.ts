// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { ReservationUpdateStatusEnum } from '../enumerations/reservation-update-status.enum'

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
  @ValidateNested()
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
