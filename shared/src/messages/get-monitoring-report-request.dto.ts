// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ComponentVariableDto } from '../datatypes/component-variable.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
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
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
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
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public monitoringCriteria!: MonitoringCriterionEnum[]
}
