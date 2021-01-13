// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class CancelReservationRequestDto implements IRequestMessage {
  public constructor(
    reservationId: number,
  ) {
    this.reservationId = reservationId
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Id of the reservation to cancel.
   */
  @IsNotEmpty()
  @IsInt()
  public reservationId: number
}
