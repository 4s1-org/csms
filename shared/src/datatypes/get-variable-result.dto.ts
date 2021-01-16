// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { AttributeEnum } from '../enumerations/attribute.enum'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { GetVariableStatusEnum } from '../enumerations/get-variable-status.enum'
import { StatusInfoDto } from './status-info.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold results of GetVariables request.
 */
export class GetVariableResultDto extends DatatypeBaseDto {
  public constructor(
    attributeStatus: GetVariableStatusEnum,
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
  @ValidateNested()
  @Type(() => StatusInfoDto)
  public attributeStatusInfo!: StatusInfoDto

  @IsNotEmpty()
  @IsEnum(GetVariableStatusEnum)
  public attributeStatus: GetVariableStatusEnum

  @IsOptional()
  @IsEnum(AttributeEnum)
  public attributeType!: AttributeEnum

  /**
   * Value of requested attribute type of component-variable. This field can only be empty when the given status is NOT accepted.
   * 
   * The Configuration Variable <<configkey-reporting-value-size,ReportingValueSize>> can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  @IsOptional()
  @MaxLength(2500)
  @IsString()
  public attributeValue!: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ComponentDto)
  public component: ComponentDto

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => VariableDto)
  public variable: VariableDto
}
