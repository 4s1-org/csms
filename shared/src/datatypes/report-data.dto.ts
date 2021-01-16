// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
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
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ComponentDto)
  public component: ComponentDto

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => VariableDto)
  public variable: VariableDto

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ArrayMaxSize(4)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => VariableAttributeDto)
  public variableAttribute: VariableAttributeDto[]

  @IsOptional()
  @ValidateNested()
  @Type(() => VariableCharacteristicsDto)
  public variableCharacteristics!: VariableCharacteristicsDto
}
