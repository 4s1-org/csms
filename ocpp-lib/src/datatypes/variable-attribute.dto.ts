// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { AttributeEnum } from '../enumerations/attribute.enum'
import { CustomDataDto } from './custom-data.dto'
import { MutabilityEnum } from '../enumerations/mutability.enum'

/**
 * Attribute data of a variable.
 */
export class VariableAttributeDto extends DatatypeBaseDto {
  @Exclude()
  private _className: "VariableAttributeDto" = "VariableAttributeDto"

  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public type!: AttributeEnum

  /**
   * Value of the attribute. May only be omitted when mutability is set to 'WriteOnly'.
   * 
   * The Configuration Variable <<configkey-reporting-value-size,ReportingValueSize>> can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  public value!: string

  public mutability!: MutabilityEnum

  /**
   * If true, value will be persistent across system reboots or power down. Default when omitted is false.
   */
  public persistent!: boolean

  /**
   * If true, value that will never be changed by the Charging Station at runtime. Default when omitted is false.
   */
  public constant!: boolean
}
