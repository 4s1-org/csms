// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ClearMonitoringStatusEnum } from '../enumerations/clear-monitoring-status.enum'
import { CustomDataDto } from './custom-data.dto'
import { StatusInfoDto } from './status-info.dto'

export class ClearMonitoringResultDto extends DatatypeBaseDto {
  public constructor(
    status: ClearMonitoringStatusEnum,
    id: number,
  ) {
    super()
    this.status = status
    this.id = id
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
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
  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
