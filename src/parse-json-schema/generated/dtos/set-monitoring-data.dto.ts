// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MonitorEnum } from '../enums/monitor.enum'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold parameters of SetVariableMonitoring request.
 */
export class SetMonitoringDataDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public id: number

  @IsOptional()
  @ApiProperty()
  public transaction: boolean

  @ApiProperty()
  public value: number

  @ApiProperty()
  public type: MonitorEnum

  @ApiProperty()
  public severity: number

  @ApiProperty()
  public component: ComponentDto

  @ApiProperty()
  public variable: VariableDto
}
