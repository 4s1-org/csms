// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { AttributeEnum } from '../enumerations/attribute.enum'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold parameters for GetVariables request.
 */
export class GetVariableDataDto {
  public constructor(
    component: ComponentDto,
    variable: VariableDto,
  ) {
    this.component = component
    this.variable = variable
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @IsEnum(AttributeEnum)
  public attributeType!: AttributeEnum

  @IsNotEmpty()
  @ValidateNested()
  public component: ComponentDto

  @IsNotEmpty()
  @ValidateNested()
  public variable: VariableDto
}
