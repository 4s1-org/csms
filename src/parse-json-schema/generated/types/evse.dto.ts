// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

/**
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
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * EVSE Identifier. This contains a number (> 0) designating an EVSE of the Charging Station.
   * Required: true
   * integer
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id: number

  /**
   * An id to designate a specific connector (on an EVSE) by connector index number.
   * Required: false
   * integer
   * 0..1
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public connectorId!: number
}
