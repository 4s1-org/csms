// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ReportBaseEnum } from '../enums/report-base.enum'

export class GetBaseReportRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public requestId!: number

  @IsNotEmpty()
  @ApiProperty()
  public reportBase!: ReportBaseEnum
}
