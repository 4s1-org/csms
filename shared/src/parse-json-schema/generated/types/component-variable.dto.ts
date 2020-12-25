// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
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

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public component: ComponentDto

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public variable!: VariableDto
}
