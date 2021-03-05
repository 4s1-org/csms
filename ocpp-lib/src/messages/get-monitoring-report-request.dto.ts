// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ComponentVariableDto } from '../datatypes/component-variable.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MonitoringCriterionEnum } from '../enumerations/monitoring-criterion.enum'

export class GetMonitoringReportRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: "GetMonitoringReportRequestDto" = "GetMonitoringReportRequestDto"

  public constructor(
    requestId: number,
  ) {
    super()
    this.requestId = requestId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => ComponentVariableDto)
  public componentVariable!: ComponentVariableDto[]

  /**
   * The Id of the request.
   */
  public requestId: number

  /**
   * This field contains criteria for components for which a monitoring report is requested
   */
  public monitoringCriteria!: MonitoringCriterionEnum[]
}
