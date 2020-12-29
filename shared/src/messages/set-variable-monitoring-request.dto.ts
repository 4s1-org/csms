// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SetMonitoringDataDto } from '../datatypes/set-monitoring-data.dto'

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
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public setMonitoringData: SetMonitoringDataDto[]
}
