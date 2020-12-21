// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator'
import { ClearMonitoringResultDto } from './clear-monitoring-result.dto'
import { CustomDataDto } from './custom-data.dto'

export class ClearVariableMonitoringResponseDto {
  public constructor(
    clearMonitoringResult: ClearMonitoringResultDto[],
  ) {
    this.clearMonitoringResult = clearMonitoringResult
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  // MinItems: 1
  @IsArray()
  public clearMonitoringResult: ClearMonitoringResultDto[]
}
