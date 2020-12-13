// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsNumber, IsBoolean, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MonitorEnum } from '../enums/monitor.enum'

/**
 * A monitoring setting for a variable.
 */
export class VariableMonitoringDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  public transaction!: boolean

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public value!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(MonitorEnum)
  public type!: MonitorEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public severity!: number
}
