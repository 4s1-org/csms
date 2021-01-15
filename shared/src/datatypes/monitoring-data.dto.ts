// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { VariableDto } from './variable.dto'
import { VariableMonitoringDto } from './variable-monitoring.dto'

/**
 * Class to hold parameters of SetVariableMonitoring request.
 */
export class MonitoringDataDto extends DatatypeBaseDto {
  public constructor(
    component: ComponentDto,
    variable: VariableDto,
    variableMonitoring: VariableMonitoringDto[],
  ) {
    super()
    this.component = component
    this.variable = variable
    this.variableMonitoring = variableMonitoring
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ValidateNested()
  public component: ComponentDto

  @IsNotEmpty()
  @ValidateNested()
  public variable: VariableDto

  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public variableMonitoring: VariableMonitoringDto[]
}
