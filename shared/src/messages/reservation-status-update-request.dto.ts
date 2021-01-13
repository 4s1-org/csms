// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { ReservationUpdateStatusEnum } from '../enumerations/reservation-update-status.enum'

export class ReservationStatusUpdateRequestDto implements IRequestMessage {
  public constructor(
    reservationId: number,
    reservationUpdateStatus: ReservationUpdateStatusEnum,
  ) {
    this.reservationId = reservationId
    this.reservationUpdateStatus = reservationUpdateStatus
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The ID of the reservation.
   */
  @IsNotEmpty()
  @IsInt()
  public reservationId: number

  @IsNotEmpty()
  @IsEnum(ReservationUpdateStatusEnum)
  public reservationUpdateStatus: ReservationUpdateStatusEnum
}
