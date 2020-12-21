// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator'
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
  // MinItems: 1
  @IsArray()
  public setMonitoringData: SetMonitoringDataDto[]
}
