// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Meter_ Value
 * urn:x-oca:ocpp:uid:2:233265
 * Collection of one or more sampled values in MeterValuesRequest and TransactionEvent. All sampled values in a MeterValue are sampled at the same point in time.
 */
export class MeterValueDto {
  public constructor(
    sampledValue: any,
    timestamp: string,
  ) {
    this.sampledValue = sampledValue
    this.timestamp = timestamp
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public sampledValue: any

  /**
   * Meter_ Value. Timestamp. Date_ Time
   * urn:x-oca:ocpp:uid:1:569259
   * Timestamp for measured value(s).
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public timestamp: string
}
