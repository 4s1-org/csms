// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { SetMonitoringResultDto } from './set-monitoring-result.dto'

export class SetVariableMonitoringResponseDto {
  public constructor(
    setMonitoringResult: SetMonitoringResultDto[],
  ) {
    this.setMonitoringResult = setMonitoringResult
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  // MinItems: 1
  @IsArray()
  public setMonitoringResult: SetMonitoringResultDto[]
}
