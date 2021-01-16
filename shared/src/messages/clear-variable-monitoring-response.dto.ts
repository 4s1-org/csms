// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { ClearMonitoringResultDto } from '../datatypes/clear-monitoring-result.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearVariableMonitoringResponseDto extends ResponseBaseDto {
  public constructor(
    clearMonitoringResult: ClearMonitoringResultDto[],
  ) {
    super()
    this.clearMonitoringResult = clearMonitoringResult
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
  @Type(() => ClearMonitoringResultDto)
  public clearMonitoringResult: ClearMonitoringResultDto[]
}
