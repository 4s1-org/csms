// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class NotifyCustomerInformationRequestDto extends RequestBaseDto {
  private _className: "NotifyCustomerInformationRequestDto" = "NotifyCustomerInformationRequestDto"

  public constructor(
    data: string,
    seqNo: number,
    generatedAt: string,
    requestId: number,
  ) {
    super()
    this.data = data
    this.seqNo = seqNo
    this.generatedAt = generatedAt
    this.requestId = requestId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * (Part of) the requested data. No format specified in which the data is returned. Should be human readable.
   */
  public data: string

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

  /**
   * The Id of the request.
   */
  public requestId: number
}
