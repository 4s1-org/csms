// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { ChargingProfileStatusEnum } from '../enumerations/charging-profile-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class SetChargingProfileResponseDto extends ResponseBaseDto {
  public constructor(
    status: ChargingProfileStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: ChargingProfileStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
