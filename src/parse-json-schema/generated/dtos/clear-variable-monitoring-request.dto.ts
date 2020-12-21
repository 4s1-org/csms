// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsArray, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class ClearVariableMonitoringRequestDto {
  public constructor(
    id: number[],
  ) {
    this.id = id
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * List of the monitors to be cleared, identified by there Id.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  public id: number[]
}
