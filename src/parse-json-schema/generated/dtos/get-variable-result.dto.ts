// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { StatusInfoDto } from './status-info.dto'
import { GetVariableStatusEnum } from '../enums/get-variable-status.enum'
import { AttributeEnum } from '../enums/attribute.enum'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold results of GetVariables request.
 */
export class GetVariableResultDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public attributeStatusInfo!: StatusInfoDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GetVariableStatusEnum)
  public attributeStatus!: GetVariableStatusEnum

  @ApiProperty()
  @IsOptional()
  @IsEnum(AttributeEnum)
  public attributeType!: AttributeEnum

  /**
   * Value of requested attribute type of component-variable. This field can only be empty when the given status is NOT accepted.

The Configuration Variable <<configkey-reporting-value-size,ReportingValueSize>> can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 2500)
  @IsString()
  public attributeValue!: string

  @ApiProperty()
  @IsNotEmpty()
  public component!: ComponentDto

  @ApiProperty()
  @IsNotEmpty()
  public variable!: VariableDto
}
