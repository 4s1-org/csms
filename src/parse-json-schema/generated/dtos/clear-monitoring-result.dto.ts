// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ClearMonitoringStatusEnum } from '../enums/clear-monitoring-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class ClearMonitoringResultDto {
  public constructor(
    status: ClearMonitoringStatusEnum,
    id: number,
  ) {
    this.status = status
    this.id = id
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ClearMonitoringStatusEnum)
  public status: ClearMonitoringStatusEnum

  /**
   * Id of the monitor of which a clear was requested.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id: number

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
