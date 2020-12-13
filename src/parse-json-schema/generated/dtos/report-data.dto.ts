// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'
import { VariableCharacteristicsDto } from './variable-characteristics.dto'

/**
 * Class to report components, variables and variable attributes and characteristics.
 */
export class ReportDataDto {
  public constructor (
    component: ComponentDto,
    variable: VariableDto,
    variableAttribute: any
  ) {
    this.component = component
    this.variable = variable
    this.variableAttribute = variableAttribute
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
  public variableAttribute: any

  @ApiProperty()
  @IsOptional()
  public variableCharacteristics!: VariableCharacteristicsDto
}
