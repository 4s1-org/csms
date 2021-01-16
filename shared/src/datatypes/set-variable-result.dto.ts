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
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @IsEnum(AttributeEnum)
  public attributeType!: AttributeEnum

  @IsNotEmpty()
  @IsEnum(SetVariableStatusEnum)
  public attributeStatus: SetVariableStatusEnum

  @IsOptional()
  @Type(() => StatusInfoDto)
  @ValidateNested()
  public attributeStatusInfo!: StatusInfoDto

  @IsNotEmpty()
  @Type(() => ComponentDto)
  @ValidateNested()
  public component: ComponentDto

  @IsNotEmpty()
  @Type(() => VariableDto)
  @ValidateNested()
  public variable: VariableDto
}
