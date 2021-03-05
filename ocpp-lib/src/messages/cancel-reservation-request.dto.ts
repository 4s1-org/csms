// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class CancelReservationRequestDto extends RequestBaseDto {
  private _className: "CancelReservationRequestDto" = "CancelReservationRequestDto"

  public constructor(
    reservationId: number,
  ) {
    super()
    this.reservationId = reservationId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Id of the reservation to cancel.
   */
  public reservationId: number
}
