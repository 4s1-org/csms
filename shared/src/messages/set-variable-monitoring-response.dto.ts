// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SetMonitoringResultDto } from '../datatypes/set-monitoring-result.dto'

export class SetVariableMonitoringResponseDto extends ResponseBaseDto {
  public constructor(
    setMonitoringResult: SetMonitoringResultDto[],
  ) {
    super()
    this.setMonitoringResult = setMonitoringResult
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ArrayMinSize(1)
  @Type(() => SetMonitoringResultDto)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public setMonitoringResult: SetMonitoringResultDto[]
}
