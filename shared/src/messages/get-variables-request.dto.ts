// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetVariableDataDto } from '../datatypes/get-variable-data.dto'

/**
 * This contains the field definition of the GetVariablesRequest PDU sent by the CSMS to the Charging Station.
 */
export class GetVariablesRequestDto extends RequestBaseDto {
  public constructor(
    getVariableData: GetVariableDataDto[],
  ) {
    super()
    this.getVariableData = getVariableData
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * List of requested variables.
   * Required: true
   * GetVariableDataType
   * 1..*
   */
  @IsNotEmpty()
  @ArrayMinSize(1)
  @Type(() => GetVariableDataDto)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public getVariableData: GetVariableDataDto[]
}
