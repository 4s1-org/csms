// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

/**
 * Represents a UnitOfMeasure with a multiplier
 */
export class UnitOfMeasureDto {
  public constructor() {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Unit of the value. Default = "Wh" if the (default) measurand is an "Energy" type.
   * This field SHALL use a value from the list Standardized Units of Measurements in Part 2 Appendices. 
   * If an applicable unit is available in that list, otherwise a "custom" unit might be used.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(20)
  @IsString()
  public unit!: string // DEFAULT VALUE: Wh

  /**
   * Multiplier, this value represents the exponent to base 10. I.e. multiplier 3 means 10 raised to the 3rd power. Default is 0.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public multiplier!: number
}
