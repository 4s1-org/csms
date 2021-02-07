// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
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

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * The ID of the reservation.
   */
  public reservationId: number

  public reservationUpdateStatus: ReservationUpdateStatusEnum
}
