// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class ClearVariableMonitoringResponseDto {
  public constructor(
    clearMonitoringResult: any
  ) {
    this.clearMonitoringResult = clearMonitoringResult
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public clearMonitoringResult: any
}
