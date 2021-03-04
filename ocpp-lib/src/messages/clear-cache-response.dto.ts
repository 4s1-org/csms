// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { ClearCacheStatusEnum } from '../enumerations/clear-cache-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class ClearCacheResponseDto extends ResponseBaseDto {
  private _className: "ClearCacheResponseDto" = "ClearCacheResponseDto"

  public constructor(
    status: ClearCacheStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: ClearCacheStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
