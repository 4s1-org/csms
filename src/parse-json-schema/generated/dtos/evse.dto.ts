// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * EVSE
 * urn:x-oca:ocpp:uid:2:233123
 * Electric Vehicle Supply Equipment
 */
export class EVSEDto {
  public constructor(
    id: number,
  ) {
    this.id = id
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Identified_ Object. MRID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:569198
   * EVSE Identifier. This contains a number (> 0) designating an EVSE of the Charging Station.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id: number

  /**
   * An id to designate a specific connector (on an EVSE) by connector index number.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public connectorId!: number
}
