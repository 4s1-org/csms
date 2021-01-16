// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class NotifyCustomerInformationRequestDto extends RequestBaseDto {
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

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * (Part of) the requested data. No format specified in which the data is returned. Should be human readable.
   */
  @IsNotEmpty()
  @MaxLength(512)
  @IsString()
  public data: string

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

  /**
   * The Id of the request.
   */
  @IsNotEmpty()
  @IsInt()
  public requestId: number
}
