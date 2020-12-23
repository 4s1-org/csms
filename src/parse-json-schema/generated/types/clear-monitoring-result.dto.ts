// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ClearMonitoringStatusEnum } from '../enumerations/clear-monitoring-status.enum'
import { CustomDataDto } from './custom-data.dto'
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
  @ValidateNested()
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
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
