// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { AttributeEnum } from '../enumerations/attribute.enum'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { SetVariableStatusEnum } from '../enumerations/set-variable-status.enum'
import { StatusInfoDto } from './status-info.dto'
import { VariableDto } from './variable.dto'

export class SetVariableResultDto extends DatatypeBaseDto {
  public constructor(
    attributeStatus: SetVariableStatusEnum,
    component: ComponentDto,
    variable: VariableDto,
  ) {
    super()
    this.attributeStatus = attributeStatus
    this.component = component
    this.variable = variable
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsOptional()
  @IsEnum(AttributeEnum)
  public attributeType!: AttributeEnum

  @IsNotEmpty()
  @IsEnum(SetVariableStatusEnum)
  public attributeStatus: SetVariableStatusEnum

  @IsOptional()
  @ValidateNested()
  @Type(() => StatusInfoDto)
  public attributeStatusInfo!: StatusInfoDto

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ComponentDto)
  public component: ComponentDto

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => VariableDto)
  public variable: VariableDto
}
