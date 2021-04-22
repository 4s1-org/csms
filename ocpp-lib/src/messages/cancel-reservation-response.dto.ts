// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CancelReservationStatusEnum } from '../enumerations/cancel-reservation-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class CancelReservationResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'CancelReservationResponseDto' = 'CancelReservationResponseDto'

  public constructor(
    status: CancelReservationStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: CancelReservationStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
