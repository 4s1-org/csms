// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SetMonitoringDataDto } from '../datatypes/set-monitoring-data.dto'

export class SetVariableMonitoringRequestDto extends RequestBaseDto {
  public constructor(
    setMonitoringData: SetMonitoringDataDto[],
  ) {
    super()
    this.setMonitoringData = setMonitoringData
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => SetMonitoringDataDto)
  public setMonitoringData: SetMonitoringDataDto[]
}
