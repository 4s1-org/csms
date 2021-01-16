// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class CancelReservationRequestDto extends RequestBaseDto {
  public constructor(
    reservationId: number,
  ) {
    super()
    this.reservationId = reservationId
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Id of the reservation to cancel.
   */
  @IsNotEmpty()
  @IsInt()
  public reservationId: number
}
