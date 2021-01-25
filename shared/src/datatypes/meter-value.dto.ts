// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { SampledValueDto } from './sampled-value.dto'

/**
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

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * One or more measured values
   * Required: true
   * SampledValueType
   * 1..*
   */
  @Type(() => SampledValueDto)
  public sampledValue: SampledValueDto[]

  /**
   * Timestamp for measured value(s).
   * Required: true
   * dateTime
   * 1..1
   */
  public timestamp: string
}
