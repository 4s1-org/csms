// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { ResetStatusEnum } from '../enumerations/reset-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class ResetResponseDto extends ResponseBaseDto {
  public constructor(
    status: ResetStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: ResetStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
