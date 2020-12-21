// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { VariableAttributeDto } from './variable-attribute.dto'
import { VariableCharacteristicsDto } from './variable-characteristics.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to report components, variables and variable attributes and characteristics.
 */
export class ReportDataDto {
  public constructor(
    component: ComponentDto,
    variable: VariableDto,
    variableAttribute: VariableAttributeDto[],
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
  // MinItems: 1
  // MinItems: 4
  @IsArray()
  public variableAttribute: VariableAttributeDto[]

  @ApiProperty()
  @IsOptional()
  public variableCharacteristics!: VariableCharacteristicsDto
}
