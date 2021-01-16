// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
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
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ArrayMinSize(1)
  @Type(() => ClearMonitoringResultDto)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public clearMonitoringResult: ClearMonitoringResultDto[]
}
