// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'
import { TriggerMessageStatusEnum } from '../enumerations/trigger-message-status.enum'

export class TriggerMessageResponseDto extends ResponseBaseDto {
  public constructor(
    status: TriggerMessageStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: TriggerMessageStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
