// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { GetVariableResultDto } from './get-variable-result.dto'

export class GetVariablesResponseDto {
  public constructor(
    getVariableResult: GetVariableResultDto[],
  ) {
    this.getVariableResult = getVariableResult
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  // MinItems: 1
  @IsArray()
  public getVariableResult: GetVariableResultDto[]
}
