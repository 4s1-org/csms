// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsNumber, IsBoolean, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MonitorEnum } from '../enums/monitor.enum'

/**
 * A monitoring setting for a variable.
 */
export class VariableMonitoringDto {
  public constructor (
    id: number,
    transaction: boolean,
    value: number,
    type: MonitorEnum,
    severity: number
  ) {
    this.id = id
    this.transaction = transaction
    this.value = value
    this.type = type
    this.severity = severity
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  public transaction: boolean

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
}
