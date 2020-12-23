// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { ReportBaseEnum } from '../enums/report-base.enum'

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
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ReportBaseEnum)
  public reportBase: ReportBaseEnum
}
