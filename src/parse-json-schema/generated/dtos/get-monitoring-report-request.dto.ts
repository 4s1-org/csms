// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class GetMonitoringReportRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public componentVariable!: any

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId!: number

  @ApiProperty()
  @IsOptional()
  public monitoringCriteria!: any
}
