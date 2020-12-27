// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { SetMonitoringResultDto } from '../types/set-monitoring-result.dto'

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
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public setMonitoringResult: SetMonitoringResultDto[]
}
