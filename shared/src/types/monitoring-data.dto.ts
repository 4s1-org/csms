// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { VariableDto } from './variable.dto'
import { VariableMonitoringDto } from './variable-monitoring.dto'

/**
 * Class to hold parameters of SetVariableMonitoring request.
 */
export class MonitoringDataDto {
  public constructor(
    component: ComponentDto,
    variable: VariableDto,
    variableMonitoring: VariableMonitoringDto[],
  ) {
    this.component = component
    this.variable = variable
    this.variableMonitoring = variableMonitoring
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public component: ComponentDto

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public variable: VariableDto

  @ApiProperty()
  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public variableMonitoring: VariableMonitoringDto[]
}
