// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { AttributeEnum } from '../enums/attribute.enum'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { GetVariableStatusEnum } from '../enums/get-variable-status.enum'
import { StatusInfoDto } from './status-info.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold results of GetVariables request.
 */
export class GetVariableResultDto {
  public constructor(
    attributeStatus: GetVariableStatusEnum,
    component: ComponentDto,
    variable: VariableDto,
  ) {
    this.attributeStatus = attributeStatus
    this.component = component
    this.variable = variable
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public attributeStatusInfo!: StatusInfoDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GetVariableStatusEnum)
  public attributeStatus: GetVariableStatusEnum

  @ApiProperty()
  @IsOptional()
  @IsEnum(AttributeEnum)
  public attributeType!: AttributeEnum

  /**
   * Value of requested attribute type of component-variable. This field can only be empty when the given status is NOT accepted.
   * 
   * The Configuration Variable <<configkey-reporting-value-size,ReportingValueSize>> can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(2500)
  @IsString()
  public attributeValue!: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public component: ComponentDto

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public variable: VariableDto
}
