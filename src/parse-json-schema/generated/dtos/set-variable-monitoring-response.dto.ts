// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
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
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  // MinItems: 1
  @IsArray()
  @ValidateNested()
  public setMonitoringResult: SetMonitoringResultDto[]
}
