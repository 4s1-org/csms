// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CompositeScheduleDto } from '../datatypes/composite-schedule.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GenericStatusEnum } from '../enumerations/generic-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetCompositeScheduleResponseDto extends ResponseBaseDto {
  private _className: "GetCompositeScheduleResponseDto" = "GetCompositeScheduleResponseDto"

  public constructor(
    status: GenericStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: GenericStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto

  @Type(() => CompositeScheduleDto)
  public schedule!: CompositeScheduleDto
}
