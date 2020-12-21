// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
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
  public setMonitoringResult: SetMonitoringResultDto[]
}
