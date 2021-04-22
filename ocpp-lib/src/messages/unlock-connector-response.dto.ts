// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'
import { UnlockStatusEnum } from '../enumerations/unlock-status.enum'

export class UnlockConnectorResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'UnlockConnectorResponseDto' = 'UnlockConnectorResponseDto'

  public constructor(
    status: UnlockStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: UnlockStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
