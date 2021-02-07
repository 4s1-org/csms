// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SendLocalListStatusEnum } from '../enumerations/send-local-list-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class SendLocalListResponseDto extends ResponseBaseDto {
  public constructor(
    status: SendLocalListStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: SendLocalListStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}