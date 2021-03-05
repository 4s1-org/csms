// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetDisplayMessagesStatusEnum } from '../enumerations/get-display-messages-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetDisplayMessagesResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: "GetDisplayMessagesResponseDto" = "GetDisplayMessagesResponseDto"

  public constructor(
    status: GetDisplayMessagesStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: GetDisplayMessagesStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
