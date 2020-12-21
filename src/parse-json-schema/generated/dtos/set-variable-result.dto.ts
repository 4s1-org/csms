// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { AttributeEnum } from '../enums/attribute.enum'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { SetVariableStatusEnum } from '../enums/set-variable-status.enum'
import { StatusInfoDto } from './status-info.dto'
import { VariableDto } from './variable.dto'

export class SetVariableResultDto {
  public constructor(
    attributeStatus: SetVariableStatusEnum,
    component: ComponentDto,
    variable: VariableDto,
  ) {
    this.attributeStatus = attributeStatus
    this.component = component
    this.variable = variable
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsEnum(AttributeEnum)
  public attributeType!: AttributeEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(SetVariableStatusEnum)
  public attributeStatus: SetVariableStatusEnum

  @ApiProperty()
  @IsOptional()
  public attributeStatusInfo!: StatusInfoDto

  @ApiProperty()
  @IsNotEmpty()
  public component: ComponentDto

  @ApiProperty()
  @IsNotEmpty()
  public variable: VariableDto
}
