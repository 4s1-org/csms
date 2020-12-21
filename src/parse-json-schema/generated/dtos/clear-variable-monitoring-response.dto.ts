// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsArray, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ClearMonitoringResultDto } from './clear-monitoring-result.dto'

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
  @IsArray()
  public clearMonitoringResult: ClearMonitoringResultDto[]
}
