// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ClearMonitoringStatusEnum } from '../enums/clear-monitoring-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class ClearMonitoringResultDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public status!: ClearMonitoringStatusEnum

  @IsNotEmpty()
  @ApiProperty()
  public id!: number

  @IsOptional()
  @ApiProperty()
  public statusInfo!: StatusInfoDto
}
