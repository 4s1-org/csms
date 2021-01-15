// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
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

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @IsEnum(AttributeEnum)
  public attributeType!: AttributeEnum

  /**
   * Value to be assigned to attribute of variable.
   * 
   * The Configuration Variable <<configkey-configuration-value-size,ConfigurationValueSize>> can be used to limit SetVariableData.attributeValue and VariableCharacteristics.valueList. The max size of these values will always remain equal.
   */
  @IsNotEmpty()
  @MaxLength(1000)
  @IsString()
  public attributeValue: string

  @IsNotEmpty()
  @ValidateNested()
  public component: ComponentDto

  @IsNotEmpty()
  @ValidateNested()
  public variable: VariableDto
}
