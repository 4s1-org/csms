// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { MeterValueDto } from '../types/meter-value.dto'

/**
 * Request_ Body
 * urn:x-enexis:ecdm:uid:2:234744
 */
export class MeterValuesRequestDto {
  public constructor(
    evseId: number,
    meterValue: MeterValueDto[],
  ) {
    this.evseId = evseId
    this.meterValue = meterValue
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Request_ Body. EVSEID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:571101
   * This contains a number (>0) designating an EVSE of the Charging Station. ‘0’ (zero) is used to designate the main power meter.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId: number

  @ApiProperty()
  @IsNotEmpty()
  // MinItems: 1
  @IsArray()
  @ValidateNested()
  public meterValue: MeterValueDto[]
}
