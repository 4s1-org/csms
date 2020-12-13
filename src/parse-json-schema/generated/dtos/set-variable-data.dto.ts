// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { AttributeEnum } from '../enums/attribute.enum'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'

export class SetVariableDataDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public attributeType!: AttributeEnum

  /**
   * Value to be assigned to attribute of variable.

The Configuration Variable <<configkey-configuration-value-size,ConfigurationValueSize>> can be used to limit SetVariableData.attributeValue and VariableCharacteristics.valueList. The max size of these values will always remain equal.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 1000)
  @IsString()
  public attributeValue!: string

  @ApiProperty()
  @IsNotEmpty()
  public component!: ComponentDto

  @ApiProperty()
  @IsNotEmpty()
  public variable!: VariableDto
}
