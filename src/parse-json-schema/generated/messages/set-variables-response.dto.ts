// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { SetVariableResultDto } from '../types/set-variable-result.dto'

/**
 * This contains the field definition of the SetVariablesResponse PDU sent by the Charging Station to the CSMS in response to a SetVariablesRequest.
 */
export class SetVariablesResponseDto {
  public constructor(
    setVariableResult: SetVariableResultDto[],
  ) {
    this.setVariableResult = setVariableResult
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * List of result statuses per Component-Variable.
   * Required: true
   * SetVariableResultType
   * 1..*
   */
  @ApiProperty()
  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public setVariableResult: SetVariableResultDto[]
}
