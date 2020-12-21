// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class NotifyCustomerInformationRequestDto {
  public constructor(
    data: string,
    seqNo: number,
    generatedAt: string,
    requestId: number,
  ) {
    this.data = data
    this.seqNo = seqNo
    this.generatedAt = generatedAt
    this.requestId = requestId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * (Part of) the requested data. No format specified in which the data is returned. Should be human readable.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 512)
  public data: string

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
  @IsString()
  public generatedAt: string

  /**
   * The Id of the request.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number
}
