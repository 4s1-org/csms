// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { AttributeEnum } from '../enumerations/attribute.enum'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { SetVariableStatusEnum } from '../enumerations/set-variable-status.enum'
import { StatusInfoDto } from './status-info.dto'
import { VariableDto } from './variable.dto'

/**
 * SetVariableResultType is used by: SetVariablesResponse
 */
export class SetVariableResultDto extends DatatypeBaseDto {
  @Exclude()
  private _className: 'SetVariableResultDto' = 'SetVariableResultDto'

  public constructor(
    attributeStatus: SetVariableStatusEnum,
    component: ComponentDto,
    variable: VariableDto,
  ) {
    super()
    this.attributeStatus = attributeStatus
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
   * Result status of setting the variable.
   * Required: true
   * SetVariableStatusEnumType
   * 1..1
   */
  public attributeStatus: SetVariableStatusEnum

  /**
   * Detailed attribute status information.
   * Required: false
   * StatusInfoType
   * 0..1
   */
  @Type(() => StatusInfoDto)
  public attributeStatusInfo!: StatusInfoDto

  /**
   * The component for which result is returned.
   * Required: true
   * ComponentType
   * 1..1
   */
  @Type(() => ComponentDto)
  public component: ComponentDto

  /**
   * The variable for which the result is returned.
   * Required: true
   * VariableType
   * 1..1
   */
  @Type(() => VariableDto)
  public variable: VariableDto
}
