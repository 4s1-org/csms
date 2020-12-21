// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { SetVariableResultDto } from './set-variable-result.dto'

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

  @ApiProperty()
  @IsNotEmpty()
  // MinItems: 1
  @IsArray()
  @ValidateNested()
  public setVariableResult: SetVariableResultDto[]
}
