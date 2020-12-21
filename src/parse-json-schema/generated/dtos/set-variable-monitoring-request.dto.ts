// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsArray, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { SetMonitoringDataDto } from './set-monitoring-data.dto'

export class SetVariableMonitoringRequestDto {
  public constructor(
    setMonitoringData: SetMonitoringDataDto[],
  ) {
    this.setMonitoringData = setMonitoringData
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  public setMonitoringData: SetMonitoringDataDto[]
}
