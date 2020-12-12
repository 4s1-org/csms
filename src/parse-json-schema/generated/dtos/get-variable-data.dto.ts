// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { AttributeEnum } from '../enums/attribute.enum'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold parameters for GetVariables request.
 */
export class GetVariableDataDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public attributeType!: AttributeEnum

  @IsNotEmpty()
  @ApiProperty()
  public component!: ComponentDto

  @IsNotEmpty()
  @ApiProperty()
  public variable!: VariableDto
}
