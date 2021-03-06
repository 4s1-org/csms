// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SetMonitoringResultDto } from '../datatypes/set-monitoring-result.dto'

export class SetVariableMonitoringResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'SetVariableMonitoringResponseDto' = 'SetVariableMonitoringResponseDto'

  public constructor(
    setMonitoringResult: SetMonitoringResultDto[],
  ) {
    super()
    this.setMonitoringResult = setMonitoringResult
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => SetMonitoringResultDto)
  public setMonitoringResult: SetMonitoringResultDto[]
}
