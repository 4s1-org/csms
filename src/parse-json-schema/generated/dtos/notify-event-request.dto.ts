// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsBoolean } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class NotifyEventRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public generatedAt!: string

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public tbc!: boolean

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public seqNo!: number

  @ApiProperty()
  @IsNotEmpty()
  public eventData!: any
}
