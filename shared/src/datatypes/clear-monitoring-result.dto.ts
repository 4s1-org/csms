// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

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

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(ClearMonitoringStatusEnum)
  public status: ClearMonitoringStatusEnum

  /**
   * Id of the monitor of which a clear was requested.
   */
  @IsNotEmpty()
  @IsInt()
  public id: number

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
