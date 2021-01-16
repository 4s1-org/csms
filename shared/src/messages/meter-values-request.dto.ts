// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
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

  @IsOptional()
  @Type(() => CustomDataDto)
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
  @Type(() => MeterValueDto)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public meterValue: MeterValueDto[]
}
