// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ClearMonitoringStatusEnum } from '../enums/clear-monitoring-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class ClearMonitoringResultDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public status!: ClearMonitoringStatusEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id!: number

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
