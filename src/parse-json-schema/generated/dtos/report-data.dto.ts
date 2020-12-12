// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'
import { VariableCharacteristicsDto } from './variable-characteristics.dto'

/**
 * Class to report components, variables and variable attributes and characteristics.
 */
export class ReportDataDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public component!: ComponentDto

  @IsNotEmpty()
  @ApiProperty()
  public variable!: VariableDto

  @IsNotEmpty()
  @ApiProperty()
  public variableAttribute!: any

  @IsOptional()
  @ApiProperty()
  public variableCharacteristics!: VariableCharacteristicsDto
}
