// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class NotifyEventRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @IsNotEmpty()
  @ApiProperty()
  public generatedAt!: string

  @IsOptional()
  @ApiProperty()
  public tbc!: boolean

  @IsNotEmpty()
  @ApiProperty()
  public seqNo!: number

  @IsNotEmpty()
  @ApiProperty()
  public eventData!: any
}
