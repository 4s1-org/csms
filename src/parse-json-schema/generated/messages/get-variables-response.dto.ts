// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { GetVariableResultDto } from '../dtos/get-variable-result.dto'

export class GetVariablesResponseDto {
  public constructor(
    getVariableResult: GetVariableResultDto[],
  ) {
    this.getVariableResult = getVariableResult
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  // MinItems: 1
  @IsArray()
  @ValidateNested()
  public getVariableResult: GetVariableResultDto[]
}
