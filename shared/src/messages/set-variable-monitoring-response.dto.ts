// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
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
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => SetMonitoringResultDto)
  public setMonitoringResult: SetMonitoringResultDto[]
}
