// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MeterValueDto } from '../datatypes/meter-value.dto'

/**
 * Request_ Body
 * urn:x-enexis:ecdm:uid:2:234744
 */
export class MeterValuesRequestDto implements IRequestMessage {
  public constructor(
    evseId: number,
    meterValue: MeterValueDto[],
  ) {
    this.evseId = evseId
    this.meterValue = meterValue
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Request_ Body. EVSEID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:571101
   * This contains a number (>0) designating an EVSE of the Charging Station. ‘0’ (zero) is used to designate the main power meter.
   */
  @IsNotEmpty()
  @IsInt()
  public evseId: number

  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public meterValue: MeterValueDto[]
}
