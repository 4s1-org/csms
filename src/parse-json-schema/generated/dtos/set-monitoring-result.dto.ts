// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { StatusInfoDto } from './status-info.dto'
import { SetMonitoringStatusEnum } from '../enums/set-monitoring-status.enum'
import { MonitorEnum } from '../enums/monitor.enum'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold result of SetVariableMonitoring request.
 */
export class SetMonitoringResultDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public id: number

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto

  @ApiProperty()
  public status: SetMonitoringStatusEnum

  @ApiProperty()
  public type: MonitorEnum

  @ApiProperty()
  public component: ComponentDto

  @ApiProperty()
  public variable: VariableDto

  @ApiProperty()
  public severity: number
}
