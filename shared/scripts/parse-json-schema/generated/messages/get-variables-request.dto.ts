// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { GetVariableDataDto } from '../types/get-variable-data.dto'

/**
 * This contains the field definition of the GetVariablesRequest PDU sent by the CSMS to the Charging Station.
 */
export class GetVariablesRequestDto {
  public constructor(
    getVariableData: GetVariableDataDto[],
  ) {
    this.getVariableData = getVariableData
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * List of requested variables.
   * Required: true
   * GetVariableDataType
   * 1..*
   */
  @ApiProperty()
  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public getVariableData: GetVariableDataDto[]
}
