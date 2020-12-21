// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class CancelReservationRequestDto {
  public constructor(
    reservationId: number,
  ) {
    this.reservationId = reservationId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Id of the reservation to cancel.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public reservationId: number
}
