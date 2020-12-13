// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsNumber, IsBoolean } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MonitorEnum } from '../enums/monitor.enum'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold parameters of SetVariableMonitoring request.
 */
export class SetMonitoringDataDto {
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
  public value!: number

  @ApiProperty()
  @IsNotEmpty()
  public type!: MonitorEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public severity!: number

  @ApiProperty()
  @IsNotEmpty()
  public component!: ComponentDto

  @ApiProperty()
  @IsNotEmpty()
  public variable!: VariableDto
}
