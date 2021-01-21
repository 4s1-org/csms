// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { AttributeEnum } from '../enumerations/attribute.enum'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { VariableDto } from './variable.dto'

export class SetVariableDataDto extends DatatypeBaseDto {
  public constructor(
    attributeValue: string,
    component: ComponentDto,
    variable: VariableDto,
  ) {
    super()
    this.attributeValue = attributeValue
    this.component = component
    this.variable = variable
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public attributeType!: AttributeEnum

  /**
   * Value to be assigned to attribute of variable.
   * 
   * The Configuration Variable <<configkey-configuration-value-size,ConfigurationValueSize>> can be used to limit SetVariableData.attributeValue and VariableCharacteristics.valueList. The max size of these values will always remain equal.
   */
  public attributeValue: string

  @Type(() => ComponentDto)
  public component: ComponentDto

  @Type(() => VariableDto)
  public variable: VariableDto
}
