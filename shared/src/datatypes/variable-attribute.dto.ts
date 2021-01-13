// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsEnum, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { AttributeEnum } from '../enumerations/attribute.enum'
import { CustomDataDto } from './custom-data.dto'
import { MutabilityEnum } from '../enumerations/mutability.enum'

/**
 * Attribute data of a variable.
 */
export class VariableAttributeDto {
  public constructor() {
    // nothing to do
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @IsEnum(AttributeEnum)
  public type!: AttributeEnum

  /**
   * Value of the attribute. May only be omitted when mutability is set to 'WriteOnly'.
   * 
   * The Configuration Variable <<configkey-reporting-value-size,ReportingValueSize>> can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  @IsOptional()
  @MaxLength(2500)
  @IsString()
  public value!: string

  @IsOptional()
  @IsEnum(MutabilityEnum)
  public mutability!: MutabilityEnum

  /**
   * If true, value will be persistent across system reboots or power down. Default when omitted is false.
   */
  @IsOptional()
  @IsBoolean()
  public persistent!: boolean

  /**
   * If true, value that will never be changed by the Charging Station at runtime. Default when omitted is false.
   */
  @IsOptional()
  @IsBoolean()
  public constant!: boolean
}
