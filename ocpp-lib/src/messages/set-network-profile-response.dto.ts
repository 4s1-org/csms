// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SetNetworkProfileStatusEnum } from '../enumerations/set-network-profile-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class SetNetworkProfileResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'SetNetworkProfileResponseDto' = 'SetNetworkProfileResponseDto'

  public constructor(
    status: SetNetworkProfileStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: SetNetworkProfileStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
