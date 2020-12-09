// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Represents a UnitOfMeasure with a multiplier
 */
export class UnitOfMeasureDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * Unit of the value. Default = "Wh" if the (default) measurand is an "Energy" type.
This field SHALL use a value from the list Standardized Units of Measurements in Part 2 Appendices. 
If an applicable unit is available in that list, otherwise a "custom" unit might be used.
   */
  @IsOptional()
  @Length(0, 20)
  @ApiProperty()
  public unit: string

  @IsOptional()
  @ApiProperty()
  public multiplier: number
}
