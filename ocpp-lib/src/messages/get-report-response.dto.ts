// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GenericDeviceModelStatusEnum } from '../enumerations/generic-device-model-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetReportResponseDto extends ResponseBaseDto {
  private _className: "GetReportResponseDto" = "GetReportResponseDto"

  public constructor(
    status: GenericDeviceModelStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: GenericDeviceModelStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
