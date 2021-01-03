// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { ClearMonitoringResultDto } from '../datatypes/clear-monitoring-result.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearVariableMonitoringResponseDto implements IResponseMessage {
  public constructor(
    clearMonitoringResult: ClearMonitoringResultDto[],
  ) {
    this.clearMonitoringResult = clearMonitoringResult
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
  public clearMonitoringResult: ClearMonitoringResultDto[]
}
