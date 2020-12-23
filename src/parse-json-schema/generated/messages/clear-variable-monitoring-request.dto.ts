// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'

export class ClearVariableMonitoringRequestDto {
  public constructor(
    id: number[],
  ) {
    this.id = id
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * List of the monitors to be cleared, identified by there Id.
   */
  @ApiProperty()
  @IsNotEmpty()
  // MinItems: 1
  @IsArray()
  public id: number[]
}
