// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Relative_ Timer_ Interval
urn:x-oca:ocpp:uid:2:233270
 */
export class RelativeTimeIntervalDto {
  public constructor (
    start: number
  ) {
    this.start = start
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public start: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public duration!: number
}
