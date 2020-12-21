// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { ReportDataDto } from './report-data.dto'

export class NotifyReportRequestDto {
  public constructor(
    requestId: number,
    generatedAt: string,
    seqNo: number,
  ) {
    this.requestId = requestId
    this.generatedAt = generatedAt
    this.seqNo = seqNo
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * The id of the GetReportRequest  or GetBaseReportRequest that requested this report
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @ApiProperty()
  @IsNotEmpty()
  // setFormat: date-time
  @IsString()
  public generatedAt: string

  @ApiProperty()
  @IsOptional()
  // MinItems: 1
  @IsArray()
  public reportData!: ReportDataDto[]

  /**
   * “to be continued” indicator. Indicates whether another part of the report follows in an upcoming notifyReportRequest message. Default value when omitted is false.
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
}
