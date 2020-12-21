// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator'
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
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  public setVariableResult: SetVariableResultDto[]
}
