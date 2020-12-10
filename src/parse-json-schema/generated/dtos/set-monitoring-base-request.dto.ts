// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MonitoringBaseEnum } from '../enums/monitoring-base.enum'

export class SetMonitoringBaseRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public monitoringBase: MonitoringBaseEnum
}
