// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MonitoringDataDto } from '../datatypes/monitoring-data.dto'

export class NotifyMonitoringReportRequestDto implements IRequestMessage {
  public constructor(
    requestId: number,
    seqNo: number,
    generatedAt: string,
  ) {
    this.requestId = requestId
    this.seqNo = seqNo
    this.generatedAt = generatedAt
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public monitor!: MonitoringDataDto[]

  /**
   * The id of the GetMonitoringRequest that requested this report.
   */
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * “to be continued” indicator. Indicates whether another part of the monitoringData follows in an upcoming notifyMonitoringReportRequest message. Default value when omitted is false.
   */
  @IsOptional()
  @IsBoolean()
  public tbc!: boolean

  /**
   * Sequence number of this message. First message starts at 0.
   */
  @IsNotEmpty()
  @IsInt()
  public seqNo: number

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @IsNotEmpty()
  @IsDateString()
  public generatedAt: string
}
