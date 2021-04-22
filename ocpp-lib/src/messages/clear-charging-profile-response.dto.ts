// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { ClearChargingProfileStatusEnum } from '../enumerations/clear-charging-profile-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class ClearChargingProfileResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'ClearChargingProfileResponseDto' = 'ClearChargingProfileResponseDto'

  public constructor(
    status: ClearChargingProfileStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: ClearChargingProfileStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
