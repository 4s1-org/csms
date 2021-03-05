// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ClearMonitoringStatusEnum } from '../enumerations/clear-monitoring-status.enum'
import { CustomDataDto } from './custom-data.dto'
import { StatusInfoDto } from './status-info.dto'

export class ClearMonitoringResultDto extends DatatypeBaseDto {
  @Exclude()
  private _className: "ClearMonitoringResultDto" = "ClearMonitoringResultDto"

  public constructor(
    status: ClearMonitoringStatusEnum,
    id: number,
  ) {
    super()
    this.status = status
    this.id = id
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: ClearMonitoringStatusEnum

  /**
   * Id of the monitor of which a clear was requested.
   */
  public id: number

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
