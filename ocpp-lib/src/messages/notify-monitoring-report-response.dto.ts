// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class NotifyMonitoringReportResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'NotifyMonitoringReportResponseDto' = 'NotifyMonitoringReportResponseDto'

  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto
}
