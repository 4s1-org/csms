// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to report components, variables and variable attributes and characteristics.
 */
export class ComponentVariableDto {
  public constructor(
    component: ComponentDto,
  ) {
    this.component = component
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ValidateNested()
  public component: ComponentDto

  @IsOptional()
  @ValidateNested()
  public variable!: VariableDto
}
