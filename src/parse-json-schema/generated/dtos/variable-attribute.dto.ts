// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsEnum, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { AttributeEnum } from '../enums/attribute.enum'
import { MutabilityEnum } from '../enums/mutability.enum'

/**
 * Attribute data of a variable.
 */
export class VariableAttributeDto {

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsEnum(AttributeEnum)
  public type!: AttributeEnum

  /**
   * Value of the attribute. May only be omitted when mutability is set to 'WriteOnly'.
   * 
   * The Configuration Variable <<configkey-reporting-value-size,ReportingValueSize>> can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 2500)
  public value!: string

  @ApiProperty()
  @IsOptional()
  @IsEnum(MutabilityEnum)
  public mutability!: MutabilityEnum

  /**
   * If true, value will be persistent across system reboots or power down. Default when omitted is false.
   */
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public persistent!: boolean

  /**
   * If true, value that will never be changed by the Charging Station at runtime. Default when omitted is false.
   */
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public constant!: boolean
}
