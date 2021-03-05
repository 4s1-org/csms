// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MeterValueDto } from '../datatypes/meter-value.dto'

/**
 * ---
 */
export class MeterValuesRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: "MeterValuesRequestDto" = "MeterValuesRequestDto"

  public constructor(
    evseId: number,
    meterValue: MeterValueDto[],
  ) {
    super()
    this.evseId = evseId
    this.meterValue = meterValue
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This contains a number (>0) designating an EVSE of the Charging Station. ‘0’ (zero) is used to designate the main power meter.
   * Required: true
   * integer
   * 1..1
   */
  public evseId: number

  /**
   * The sampled meter values with timestamps.
   * Required: true
   * MeterValueType
   * 1..*
   */
  @Type(() => MeterValueDto)
  public meterValue: MeterValueDto[]
}
