// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MeterValueDto } from '../datatypes/meter-value.dto'

/**
 * Request_ Body
 * urn:x-enexis:ecdm:uid:2:234744
 */
export class MeterValuesRequestDto extends RequestBaseDto {
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
   * Request_ Body. EVSEID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:571101
   * This contains a number (>0) designating an EVSE of the Charging Station. ‘0’ (zero) is used to designate the main power meter.
   */
  public evseId: number

  @Type(() => MeterValueDto)
  public meterValue: MeterValueDto[]
}
