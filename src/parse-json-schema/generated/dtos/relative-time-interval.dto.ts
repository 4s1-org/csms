// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Relative_ Timer_ Interval
urn:x-oca:ocpp:uid:2:233270
 */
export class RelativeTimeIntervalDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public start!: number

  @IsOptional()
  @ApiProperty()
  public duration!: number
}
