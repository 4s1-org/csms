// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { AttributeEnum } from '../enumerations/attribute.enum'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { SetVariableStatusEnum } from '../enumerations/set-variable-status.enum'
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

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @IsEnum(AttributeEnum)
  public attributeType!: AttributeEnum

  @IsNotEmpty()
  @IsEnum(SetVariableStatusEnum)
  public attributeStatus: SetVariableStatusEnum

  @IsOptional()
  @ValidateNested()
  public attributeStatusInfo!: StatusInfoDto

  @IsNotEmpty()
  @ValidateNested()
  public component: ComponentDto

  @IsNotEmpty()
  @ValidateNested()
  public variable: VariableDto
}
