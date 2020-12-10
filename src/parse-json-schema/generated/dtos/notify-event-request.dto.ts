// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class NotifyEventRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @ApiProperty()
  public generatedAt: string

  @IsOptional()
  @ApiProperty()
  public tbc: boolean

  @ApiProperty()
  public seqNo: number

  @ApiProperty()
  public eventData: any
}
