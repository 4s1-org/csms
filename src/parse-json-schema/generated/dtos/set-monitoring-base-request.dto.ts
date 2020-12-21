// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MonitoringBaseEnum } from '../enums/monitoring-base.enum'

export class SetMonitoringBaseRequestDto {
  public constructor(
    monitoringBase: MonitoringBaseEnum
  ) {
    this.monitoringBase = monitoringBase
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(MonitoringBaseEnum)
  public monitoringBase: MonitoringBaseEnum
}
