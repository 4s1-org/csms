// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class NotifyMonitoringReportRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public monitor!: any

  @IsNotEmpty()
  @ApiProperty()
  public requestId!: number

  @IsOptional()
  @ApiProperty()
  public tbc!: boolean

  @IsNotEmpty()
  @ApiProperty()
  public seqNo!: number

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @IsNotEmpty()
  @ApiProperty()
  public generatedAt!: string
}
