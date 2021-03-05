// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { NotifyEvChargingNeedsStatusEnum } from '../enumerations/notify-ev-charging-needs-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class NotifyEvChargingNeedsResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: "NotifyEvChargingNeedsResponseDto" = "NotifyEvChargingNeedsResponseDto"

  public constructor(
    status: NotifyEvChargingNeedsStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: NotifyEvChargingNeedsStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
