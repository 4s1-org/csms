// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsString, IsBoolean, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { AttributeEnum } from '../enums/attribute.enum'
import { MutabilityEnum } from '../enums/mutability.enum'

/**
 * Attribute data of a variable.
 */
export class VariableAttributeDto {
  public constructor() {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsEnum(AttributeEnum)
  public type!: AttributeEnum

  /**
   * Value of the attribute. May only be omitted when mutability is set to 'WriteOnly'.

The Configuration Variable <<configkey-reporting-value-size,ReportingValueSize>> can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 2500)
  @IsString()
  public value!: string

  @ApiProperty()
  @IsOptional()
  @IsEnum(MutabilityEnum)
  public mutability!: MutabilityEnum

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public persistent!: boolean

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public constant!: boolean
}
