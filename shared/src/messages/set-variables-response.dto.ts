// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SetVariableResultDto } from '../datatypes/set-variable-result.dto'

/**
 * This contains the field definition of the SetVariablesResponse PDU sent by the Charging Station to the CSMS in response to a SetVariablesRequest.
 */
export class SetVariablesResponseDto extends ResponseBaseDto {
  public constructor(
    setVariableResult: SetVariableResultDto[],
  ) {
    super()
    this.setVariableResult = setVariableResult
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * List of result statuses per Component-Variable.
   * Required: true
   * SetVariableResultType
   * 1..*
   */
  @IsNotEmpty()
  @ArrayMinSize(1)
  @Type(() => SetVariableResultDto)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public setVariableResult: SetVariableResultDto[]
}
