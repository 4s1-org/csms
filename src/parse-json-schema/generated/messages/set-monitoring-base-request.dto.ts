// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { MonitoringBaseEnum } from '../enums/monitoring-base.enum'

export class SetMonitoringBaseRequestDto {
  public constructor(
    monitoringBase: MonitoringBaseEnum,
  ) {
    this.monitoringBase = monitoringBase
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(MonitoringBaseEnum)
  public monitoringBase: MonitoringBaseEnum
}
