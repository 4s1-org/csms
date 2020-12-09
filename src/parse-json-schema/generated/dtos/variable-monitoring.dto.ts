// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MonitorEnum } from '../enums/monitor.enum'

/**
 * A monitoring setting for a variable.
 */
export class VariableMonitoringDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public id: number

  @ApiProperty()
  public transaction: boolean

  @ApiProperty()
  public value: number

  @ApiProperty()
  public type: MonitorEnum

  @ApiProperty()
  public severity: number
}
