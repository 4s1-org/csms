// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsDateString, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { SampledValueDto } from './sampled-value.dto'

/**
 * Meter_ Value
 * urn:x-oca:ocpp:uid:2:233265
 * Collection of one or more sampled values in MeterValuesRequest and TransactionEvent. All sampled values in a MeterValue are sampled at the same point in time.
 */
export class MeterValueDto extends DatatypeBaseDto {
  public constructor(
    sampledValue: SampledValueDto[],
    timestamp: string,
  ) {
    super()
    this.sampledValue = sampledValue
    this.timestamp = timestamp
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => SampledValueDto)
  public sampledValue: SampledValueDto[]

  /**
   * Meter_ Value. Timestamp. Date_ Time
   * urn:x-oca:ocpp:uid:1:569259
   * Timestamp for measured value(s).
   */
  @IsNotEmpty()
  @IsDateString()
  public timestamp: string
}
