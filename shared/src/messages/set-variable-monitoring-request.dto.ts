// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
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
