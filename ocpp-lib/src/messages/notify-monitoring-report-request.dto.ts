// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MonitoringDataDto } from '../datatypes/monitoring-data.dto'

export class NotifyMonitoringReportRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: 'NotifyMonitoringReportRequestDto' = 'NotifyMonitoringReportRequestDto'

  public constructor(
    requestId: number,
    seqNo: number,
    generatedAt: string,
  ) {
    super()
    this.requestId = requestId
    this.seqNo = seqNo
    this.generatedAt = generatedAt
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => MonitoringDataDto)
  public monitor!: MonitoringDataDto[]

  /**
   * The id of the GetMonitoringRequest that requested this report.
   */
  public requestId: number

  /**
   * “to be continued” indicator. Indicates whether another part of the monitoringData follows in an upcoming notifyMonitoringReportRequest message. Default value when omitted is false.
   */
  public tbc!: boolean

  /**
   * Sequence number of this message. First message starts at 0.
   */
  public seqNo: number

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  public generatedAt: string
}
