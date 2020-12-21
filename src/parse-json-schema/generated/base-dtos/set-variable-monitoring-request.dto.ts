// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { SetMonitoringDataDto } from '../dtos/set-monitoring-data.dto'

export class SetVariableMonitoringRequestDto {
  public constructor(
    setMonitoringData: SetMonitoringDataDto[],
  ) {
    this.setMonitoringData = setMonitoringData
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  // MinItems: 1
  @IsArray()
  @ValidateNested()
  public setMonitoringData: SetMonitoringDataDto[]
}
