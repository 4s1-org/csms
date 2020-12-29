// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { ReportBaseEnum } from '../enumerations/report-base.enum'

/**
 * This contains the field definition of the GetBaseReportRequest PDU sent by the CSMS to the Charging Station.
 */
export class GetBaseReportRequestDto {
  public constructor(
    requestId: number,
    reportBase: ReportBaseEnum,
  ) {
    this.requestId = requestId
    this.reportBase = reportBase
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The Id of the request.
   * Required: true
   * integer
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * This field specifies the report base.
   * Required: true
   * ReportBaseEnumType
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ReportBaseEnum)
  public reportBase: ReportBaseEnum
}
