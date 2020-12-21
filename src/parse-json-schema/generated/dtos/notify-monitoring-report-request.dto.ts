// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { MonitoringDataDto } from './monitoring-data.dto'

export class NotifyMonitoringReportRequestDto {
  public constructor(
    requestId: number,
    seqNo: number,
    generatedAt: string,
  ) {
    this.requestId = requestId
    this.seqNo = seqNo
    this.generatedAt = generatedAt
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  // MinItems: 1
  @IsArray()
  public monitor!: MonitoringDataDto[]

  /**
   * The id of the GetMonitoringRequest that requested this report.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * “to be continued” indicator. Indicates whether another part of the monitoringData follows in an upcoming notifyMonitoringReportRequest message. Default value when omitted is false.
   */
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public tbc!: boolean

  /**
   * Sequence number of this message. First message starts at 0.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public seqNo: number

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @ApiProperty()
  @IsNotEmpty()
  // setFormat: date-time
  @IsString()
  public generatedAt: string
}
