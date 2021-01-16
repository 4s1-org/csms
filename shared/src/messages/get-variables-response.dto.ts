// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetVariableResultDto } from '../datatypes/get-variable-result.dto'

/**
 * This contains the field definition of the GetVariablesResponse PDU sent by the CSMS to the Charging Station in response to GetVariablesRequest.
 */
export class GetVariablesResponseDto extends ResponseBaseDto {
  public constructor(
    getVariableResult: GetVariableResultDto[],
  ) {
    super()
    this.getVariableResult = getVariableResult
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * List of requested variables and their values.
   * Required: true
   * GetVariableResultType
   * 1..*
   */
  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => GetVariableResultDto)
  public getVariableResult: GetVariableResultDto[]
}
