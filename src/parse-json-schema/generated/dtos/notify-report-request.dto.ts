// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsBoolean } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class NotifyReportRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId!: number

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public generatedAt!: string

  @ApiProperty()
  @IsOptional()
  public reportData!: any

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public tbc!: boolean

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public seqNo!: number
}
