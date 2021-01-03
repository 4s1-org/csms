// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SetVariableDataDto } from '../datatypes/set-variable-data.dto'

/**
 * This contains the field definition of the SetVariablesRequest PDU sent by the CSMS to the Charging Station.
 */
export class SetVariablesRequestDto implements IRequestMessage {
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
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public setVariableData: SetVariableDataDto[]
}
