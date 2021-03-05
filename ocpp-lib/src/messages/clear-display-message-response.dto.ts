// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { ClearMessageStatusEnum } from '../enumerations/clear-message-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class ClearDisplayMessageResponseDto extends ResponseBaseDto {
  private _className: "ClearDisplayMessageResponseDto" = "ClearDisplayMessageResponseDto"

  public constructor(
    status: ClearMessageStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: ClearMessageStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
