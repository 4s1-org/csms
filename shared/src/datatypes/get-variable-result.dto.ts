// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { AttributeEnum } from '../enumerations/attribute.enum'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { GetVariableStatusEnum } from '../enumerations/get-variable-status.enum'
import { StatusInfoDto } from './status-info.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold results of GetVariables request.
 */
export class GetVariableResultDto extends DatatypeBaseDto {
  public constructor(
    attributeStatus: GetVariableStatusEnum,
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

  @Type(() => StatusInfoDto)
  public attributeStatusInfo!: StatusInfoDto

  public attributeStatus: GetVariableStatusEnum

  public attributeType!: AttributeEnum

  /**
   * Value of requested attribute type of component-variable. This field can only be empty when the given status is NOT accepted.
   * 
   * The Configuration Variable <<configkey-reporting-value-size,ReportingValueSize>> can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  public attributeValue!: string

  @Type(() => ComponentDto)
  public component: ComponentDto

  @Type(() => VariableDto)
  public variable: VariableDto
}
