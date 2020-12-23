// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { GetVariableDataDto } from '../types/get-variable-data.dto'

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

  @ApiProperty()
  @IsNotEmpty()
  // MinItems: 1
  @IsArray()
  @ValidateNested()
  public getVariableData: GetVariableDataDto[]
}
