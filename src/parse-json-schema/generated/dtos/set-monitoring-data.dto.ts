// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsNumber, IsBoolean, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MonitorEnum } from '../enums/monitor.enum'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold parameters of SetVariableMonitoring request.
 */
export class SetMonitoringDataDto {
  public constructor(
    value: number,
    type: MonitorEnum,
    severity: number,
    component: ComponentDto,
    variable: VariableDto
  ) {
    this.value = value
    this.type = type
    this.severity = severity
    this.component = component
    this.variable = variable
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
  @IsBoolean()
  public transaction!: boolean

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public value: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(MonitorEnum)
  public type: MonitorEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public severity: number

  @ApiProperty()
  @IsNotEmpty()
  public component: ComponentDto

  @ApiProperty()
  @IsNotEmpty()
  public variable: VariableDto
}
