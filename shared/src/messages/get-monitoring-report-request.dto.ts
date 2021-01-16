// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ComponentVariableDto } from '../datatypes/component-variable.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MonitoringCriterionEnum } from '../enumerations/monitoring-criterion.enum'

export class GetMonitoringReportRequestDto extends RequestBaseDto {
  public constructor(
    requestId: number,
  ) {
    super()
    this.requestId = requestId
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsOptional()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ComponentVariableDto)
  public componentVariable!: ComponentVariableDto[]

  /**
   * The Id of the request.
   */
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * This field contains criteria for components for which a monitoring report is requested
   */
  @IsOptional()
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => MonitoringCriterionEnum)
  public monitoringCriteria!: MonitoringCriterionEnum[]
}
