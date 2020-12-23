// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { AttributeEnum } from '../enumerations/attribute.enum'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { VariableDto } from './variable.dto'

export class SetVariableDataDto {
  public constructor(
    attributeValue: string,
    component: ComponentDto,
    variable: VariableDto,
  ) {
    this.attributeValue = attributeValue
    this.component = component
    this.variable = variable
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsEnum(AttributeEnum)
  public attributeType!: AttributeEnum

  /**
   * Value to be assigned to attribute of variable.
   * 
   * The Configuration Variable <<configkey-configuration-value-size,ConfigurationValueSize>> can be used to limit SetVariableData.attributeValue and VariableCharacteristics.valueList. The max size of these values will always remain equal.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(1000)
  @IsString()
  public attributeValue: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public component: ComponentDto

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public variable: VariableDto
}
