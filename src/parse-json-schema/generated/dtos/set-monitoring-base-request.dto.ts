// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MonitoringBaseEnum } from '../enums/monitoring-base.enum'

export class SetMonitoringBaseRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public monitoringBase!: MonitoringBaseEnum
}
