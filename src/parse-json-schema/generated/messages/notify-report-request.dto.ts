// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { ReportDataDto } from '../types/report-data.dto'

/**
 * This contains the field definition of the NotifyReportRequest PDU sent by the Charging Station to the CSMS.
 */
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
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The id of the GetReportRequest or GetBaseReportRequest that requested this report
   * Required: true
   * integer
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   * Required: true
   * dateTime
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  // setFormat: date-time
  @IsString()
  public generatedAt: string

  /**
   * List of ReportData.
   * Required: false
   * ReportDataType
   * 0..*
   */
  @ApiProperty()
  @IsOptional()
  // MinItems: 1
  @IsArray()
  @ValidateNested()
  public reportData!: ReportDataDto[]

  /**
   * "to be continued" indicator. Indicates whether another part of the report follows in an upcoming notifyReportRequest message. Default value when omitted is false.
   * Required: false
   * boolean
   * 0..1
   */
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public tbc!: boolean

  /**
   * Sequence number of this message. First message starts at 0.
   * Required: true
   * integer
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public seqNo: number
}
