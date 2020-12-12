// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Meter_ Value
urn:x-oca:ocpp:uid:2:233265
Collection of one or more sampled values in MeterValuesRequest and TransactionEvent. All sampled values in a MeterValue are sampled at the same point in time.
 */
export class MeterValueDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public sampledValue!: any

  /**
   * Meter_ Value. Timestamp. Date_ Time
urn:x-oca:ocpp:uid:1:569259
Timestamp for measured value(s).
   */
  @IsNotEmpty()
  @ApiProperty()
  public timestamp!: string
}
