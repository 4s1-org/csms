// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { GetVariableDataDto } from './get-variable-data.dto'

export class GetVariablesRequestDto {
  public constructor(
    getVariableData: GetVariableDataDto[],
  ) {
    this.getVariableData = getVariableData
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public getVariableData: GetVariableDataDto[]
}
