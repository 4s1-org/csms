// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

/**
 * Relative_ Timer_ Interval
 * urn:x-oca:ocpp:uid:2:233270
 */
export class RelativeTimeIntervalDto {
  public constructor(
    start: number,
  ) {
    this.start = start
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Relative_ Timer_ Interval. Start. Elapsed_ Time
   * urn:x-oca:ocpp:uid:1:569279
   * Start of the interval, in seconds from NOW.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public start: number

  /**
   * Relative_ Timer_ Interval. Duration. Elapsed_ Time
   * urn:x-oca:ocpp:uid:1:569280
   * Duration of the interval, in seconds.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public duration!: number
}
