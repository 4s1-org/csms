// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { ReserveNowStatusEnum } from '../enumerations/reserve-now-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class ReserveNowResponseDto extends ResponseBaseDto {
  private _className: "ReserveNowResponseDto" = "ReserveNowResponseDto"

  public constructor(
    status: ReserveNowStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: ReserveNowStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
