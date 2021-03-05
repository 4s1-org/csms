// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ComponentCriterionEnum } from '../enumerations/component-criterion.enum'
import { ComponentVariableDto } from '../datatypes/component-variable.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetReportRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: "GetReportRequestDto" = "GetReportRequestDto"

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
   * This field contains criteria for components for which a report is requested
   */
  public componentCriteria!: ComponentCriterionEnum[]
}
