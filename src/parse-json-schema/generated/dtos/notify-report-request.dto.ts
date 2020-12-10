// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class NotifyReportRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public requestId: number

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @ApiProperty()
  public generatedAt: string

  @IsOptional()
  @ApiProperty()
  public reportData: any

  @IsOptional()
  @ApiProperty()
  public tbc: boolean

  @ApiProperty()
  public seqNo: number
}
