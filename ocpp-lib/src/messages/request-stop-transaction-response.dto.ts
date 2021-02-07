// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { RequestStartStopStatusEnum } from '../enumerations/request-start-stop-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class RequestStopTransactionResponseDto extends ResponseBaseDto {
  public constructor(
    status: RequestStartStopStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: RequestStartStopStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
