// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { AttributeEnum } from '../enumerations/attribute.enum'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold parameters for GetVariables request.
 */
export class GetVariableDataDto extends DatatypeBaseDto {
  public constructor(
    component: ComponentDto,
    variable: VariableDto,
  ) {
    super()
    this.component = component
    this.variable = variable
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @IsEnum(AttributeEnum)
  public attributeType!: AttributeEnum

  @IsNotEmpty()
  @Type(() => ComponentDto)
  @ValidateNested()
  public component: ComponentDto

  @IsNotEmpty()
  @Type(() => VariableDto)
  @ValidateNested()
  public variable: VariableDto
}
