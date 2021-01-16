// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { VariableAttributeDto } from './variable-attribute.dto'
import { VariableCharacteristicsDto } from './variable-characteristics.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to report components, variables and variable attributes and characteristics.
 */
export class ReportDataDto extends DatatypeBaseDto {
  public constructor(
    component: ComponentDto,
    variable: VariableDto,
    variableAttribute: VariableAttributeDto[],
  ) {
    super()
    this.component = component
    this.variable = variable
    this.variableAttribute = variableAttribute
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @Type(() => ComponentDto)
  @ValidateNested()
  public component: ComponentDto

  @IsNotEmpty()
  @Type(() => VariableDto)
  @ValidateNested()
  public variable: VariableDto

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ArrayMaxSize(4)
  @Type(() => VariableAttributeDto)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public variableAttribute: VariableAttributeDto[]

  @IsOptional()
  @Type(() => VariableCharacteristicsDto)
  @ValidateNested()
  public variableCharacteristics!: VariableCharacteristicsDto
}
