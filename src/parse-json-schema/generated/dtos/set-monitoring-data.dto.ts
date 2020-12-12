// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
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
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public id!: number

  @IsOptional()
  @ApiProperty()
  public transaction!: boolean

  @IsNotEmpty()
  @ApiProperty()
  public value!: number

  @IsNotEmpty()
  @ApiProperty()
  public type!: MonitorEnum

  @IsNotEmpty()
  @ApiProperty()
  public severity!: number

  @IsNotEmpty()
  @ApiProperty()
  public component!: ComponentDto

  @IsNotEmpty()
  @ApiProperty()
  public variable!: VariableDto
}
