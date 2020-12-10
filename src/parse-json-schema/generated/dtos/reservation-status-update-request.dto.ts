// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ReservationUpdateStatusEnum } from '../enums/reservation-update-status.enum'

export class ReservationStatusUpdateRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public reservationId: number

  @ApiProperty()
  public reservationUpdateStatus: ReservationUpdateStatusEnum
}
