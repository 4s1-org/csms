// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

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

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => ClearMonitoringResultDto)
  public clearMonitoringResult: ClearMonitoringResultDto[]
}