// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { ReportBaseEnum } from '../enumerations/report-base.enum'

/**
 * This contains the field definition of the GetBaseReportRequest PDU sent by the CSMS to the Charging Station.
 */
export class GetBaseReportRequestDto extends RequestBaseDto {
  public constructor(
    requestId: number,
    reportBase: ReportBaseEnum,
  ) {
    super()
    this.requestId = requestId
    this.reportBase = reportBase
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The Id of the request.
   * Required: true
   * integer
   * 1..1
   */
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * This field specifies the report base.
   * Required: true
   * ReportBaseEnumType
   * 1..1
   */
  @IsNotEmpty()
  @IsEnum(ReportBaseEnum)
  public reportBase: ReportBaseEnum
}
