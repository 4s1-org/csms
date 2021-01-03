// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetVariableResultDto } from '../datatypes/get-variable-result.dto'

/**
 * This contains the field definition of the GetVariablesResponse PDU sent by the CSMS to the Charging Station in response to GetVariablesRequest.
 */
export class GetVariablesResponseDto implements IResponseMessage {
  public constructor(
    getVariableResult: GetVariableResultDto[],
  ) {
    this.getVariableResult = getVariableResult
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * List of requested variables and their values.
   * Required: true
   * GetVariableResultType
   * 1..*
   */
  @ApiProperty()
  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public getVariableResult: GetVariableResultDto[]
}
