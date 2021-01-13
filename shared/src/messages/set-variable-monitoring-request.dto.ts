// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SetMonitoringDataDto } from '../datatypes/set-monitoring-data.dto'

export class SetVariableMonitoringRequestDto implements IRequestMessage {
  public constructor(
    setMonitoringData: SetMonitoringDataDto[],
  ) {
    this.setMonitoringData = setMonitoringData
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public setMonitoringData: SetMonitoringDataDto[]
}
