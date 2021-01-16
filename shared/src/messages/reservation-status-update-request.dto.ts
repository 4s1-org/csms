// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { ReservationUpdateStatusEnum } from '../enumerations/reservation-update-status.enum'

export class ReservationStatusUpdateRequestDto extends RequestBaseDto {
  public constructor(
    reservationId: number,
    reservationUpdateStatus: ReservationUpdateStatusEnum,
  ) {
    super()
    this.reservationId = reservationId
    this.reservationUpdateStatus = reservationUpdateStatus
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
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
