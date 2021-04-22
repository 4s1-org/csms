// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetChargingProfileStatusEnum } from '../enumerations/get-charging-profile-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetChargingProfilesResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'GetChargingProfilesResponseDto' = 'GetChargingProfilesResponseDto'

  public constructor(
    status: GetChargingProfileStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: GetChargingProfileStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
