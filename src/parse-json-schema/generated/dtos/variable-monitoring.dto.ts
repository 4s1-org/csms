// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MonitorEnum } from '../enums/monitor.enum'

/**
 * A monitoring setting for a variable.
 */
export class VariableMonitoringDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public id!: number

  @IsNotEmpty()
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
}
