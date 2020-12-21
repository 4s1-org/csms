// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { EventDataDto } from './event-data.dto'

export class NotifyEventRequestDto {
  public constructor(
    generatedAt: string,
    seqNo: number,
    eventData: EventDataDto[],
  ) {
    this.generatedAt = generatedAt
    this.seqNo = seqNo
    this.eventData = eventData
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public generatedAt: string

  /**
   * “to be continued” indicator. Indicates whether another part of the report follows in an upcoming notifyEventRequest message. Default value when omitted is false.
   */
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public tbc!: boolean

  /**
   * Sequence number of this message. First message starts at 0.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public seqNo: number

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  public eventData: EventDataDto[]
}
