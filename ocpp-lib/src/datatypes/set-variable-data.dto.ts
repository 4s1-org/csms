// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { AttributeEnum } from '../enumerations/attribute.enum'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { VariableDto } from './variable.dto'

/**
 * SetVariableDataType is used by: SetVariablesRequest
 */
export class SetVariableDataDto extends DatatypeBaseDto {
  @Exclude()
  private _className: "SetVariableDataDto" = "SetVariableDataDto"

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

  /**
   * Type of attribute: Actual, Target, MinSet, MaxSet. Default is Actual when omitted.
   * Required: false
   * AttributeEnumType
   * 0..1
   */
  public attributeType!: AttributeEnum

  /**
   * Value to be assigned to attribute of variable. The Configuration Variable ConfigurationValueSize can be used to limit SetVariableData.attributeValue and VariableCharacteristics.valueList. The max size of these values will always remain equal.
   * Required: true
   * string[0..1000]
   * 1..1
   */
  public attributeValue: string

  /**
   * The component for which the variable data is set.
   * Required: true
   * ComponentType
   * 1..1
   */
  @Type(() => ComponentDto)
  public component: ComponentDto

  /**
   * Specifies the that needs to be set.
   * Required: true
   * VariableType
   * 1..1
   */
  @Type(() => VariableDto)
  public variable: VariableDto
}
