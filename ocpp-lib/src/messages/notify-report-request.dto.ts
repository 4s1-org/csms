// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { ReportDataDto } from '../datatypes/report-data.dto'

/**
 * This contains the field definition of the NotifyReportRequest PDU sent by the Charging Station to the CSMS.
 */
export class NotifyReportRequestDto extends RequestBaseDto {
  private _className: "NotifyReportRequestDto" = "NotifyReportRequestDto"

  public constructor(
    requestId: number,
    generatedAt: string,
    seqNo: number,
  ) {
    super()
    this.requestId = requestId
    this.generatedAt = generatedAt
    this.seqNo = seqNo
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * The id of the GetReportRequest or GetBaseReportRequest that requested this report
   * Required: true
   * integer
   * 1..1
   */
  public requestId: number

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   * Required: true
   * dateTime
   * 1..1
   */
  public generatedAt: string

  /**
   * List of ReportData.
   * Required: false
   * ReportDataType
   * 0..*
   */
  @Type(() => ReportDataDto)
  public reportData!: ReportDataDto[]

  /**
   * "to be continued" indicator. Indicates whether another part of the report follows in an upcoming notifyReportRequest message. Default value when omitted is false.
   * Required: false
   * boolean
   * 0..1
   */
  public tbc!: boolean

  /**
   * Sequence number of this message. First message starts at 0.
   * Required: true
   * integer
   * 1..1
   */
  public seqNo: number
}
