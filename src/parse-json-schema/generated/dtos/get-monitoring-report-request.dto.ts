// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class GetMonitoringReportRequestDto {
  public constructor(
    requestId: number,
  ) {
    this.requestId = requestId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public componentVariable!: any

  /**
   * The Id of the request.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * This field contains criteria for components for which a monitoring report is requested
   */
  @ApiProperty()
  @IsOptional()
  public monitoringCriteria!: any
}
