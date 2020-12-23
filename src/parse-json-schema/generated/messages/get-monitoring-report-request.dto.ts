// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ComponentVariableDto } from '../types/component-variable.dto'
import { CustomDataDto } from '../types/custom-data.dto'
import { MonitoringCriterionEnum } from '../enumerations/monitoring-criterion.enum'

export class GetMonitoringReportRequestDto {
  public constructor(
    requestId: number,
  ) {
    this.requestId = requestId
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  // MinItems: 1
  @IsArray()
  @ValidateNested()
  public componentVariable!: ComponentVariableDto[]

  /**
   * The Id of the request.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * This field contains criteria for components for which a monitoring report is requested
   */
  @ApiProperty()
  @IsOptional()
  // MinItems: 1
  // MinItems: 3
  @IsArray()
  @ValidateNested()
  public monitoringCriteria!: MonitoringCriterionEnum[]
}
