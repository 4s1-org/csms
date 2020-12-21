// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsArray, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ComponentDto } from './component.dto'
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
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public component: ComponentDto

  @ApiProperty()
  @IsNotEmpty()
  public variable: VariableDto

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  public variableMonitoring: VariableMonitoringDto[]
}
