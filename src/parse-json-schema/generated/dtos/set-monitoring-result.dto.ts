// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsEnum } from 'class-validator'
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
  public constructor (
    severity: number
  ) {
    this.severity = severity
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public id!: number

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(SetMonitoringStatusEnum)
  public status!: SetMonitoringStatusEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(MonitorEnum)
  public type!: MonitorEnum

  @ApiProperty()
  @IsNotEmpty()
  public component!: ComponentDto

  @ApiProperty()
  @IsNotEmpty()
  public variable!: VariableDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public severity!: number
}
