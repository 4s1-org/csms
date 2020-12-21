// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsArray, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { SetVariableDataDto } from './set-variable-data.dto'

export class SetVariablesRequestDto {
  public constructor(
    setVariableData: SetVariableDataDto[],
  ) {
    this.setVariableData = setVariableData
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  public setVariableData: SetVariableDataDto[]
}
