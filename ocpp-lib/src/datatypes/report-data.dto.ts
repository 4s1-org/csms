// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

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
  private _className: "ReportDataDto" = "ReportDataDto"

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

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => ComponentDto)
  public component: ComponentDto

  @Type(() => VariableDto)
  public variable: VariableDto

  @Type(() => VariableAttributeDto)
  public variableAttribute: VariableAttributeDto[]

  @Type(() => VariableCharacteristicsDto)
  public variableCharacteristics!: VariableCharacteristicsDto
}
