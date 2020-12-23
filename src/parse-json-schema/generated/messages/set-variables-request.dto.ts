// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { SetVariableDataDto } from '../types/set-variable-data.dto'

/**
 * This contains the field definition of the SetVariablesRequest PDU sent by the CSMS to the Charging Station.
 */
export class SetVariablesRequestDto {
  public constructor(
    setVariableData: SetVariableDataDto[],
  ) {
    this.setVariableData = setVariableData
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * List of Component-Variable pairs and attribute values to set.
   * Required: true
   * SetVariableDataType
   * 1..*
   */
  @ApiProperty()
  @IsNotEmpty()
  // MinItems: 1
  @IsArray()
  @ValidateNested()
  public setVariableData: SetVariableDataDto[]
}
