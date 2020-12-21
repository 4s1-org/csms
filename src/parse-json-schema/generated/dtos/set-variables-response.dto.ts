// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
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
  public setVariableResult: SetVariableResultDto[]
}
