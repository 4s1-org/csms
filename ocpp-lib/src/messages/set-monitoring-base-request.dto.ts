// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MonitoringBaseEnum } from '../enumerations/monitoring-base.enum'

export class SetMonitoringBaseRequestDto extends RequestBaseDto {
  private _className: "SetMonitoringBaseRequestDto" = "SetMonitoringBaseRequestDto"

  public constructor(
    monitoringBase: MonitoringBaseEnum,
  ) {
    super()
    this.monitoringBase = monitoringBase
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public monitoringBase: MonitoringBaseEnum
}
