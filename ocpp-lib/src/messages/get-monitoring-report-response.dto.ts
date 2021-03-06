// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GenericDeviceModelStatusEnum } from '../enumerations/generic-device-model-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetMonitoringReportResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'GetMonitoringReportResponseDto' = 'GetMonitoringReportResponseDto'

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
