// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Represents a UnitOfMeasure with a multiplier
 */
export class UnitOfMeasureDto {

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Unit of the value. Default = "Wh" if the (default) measurand is an "Energy" type.
   * This field SHALL use a value from the list Standardized Units of Measurements in Part 2 Appendices. 
   * If an applicable unit is available in that list, otherwise a "custom" unit might be used.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 20)
  public unit!: string

  /**
   * Multiplier, this value represents the exponent to base 10. I.e. multiplier 3 means 10 raised to the 3rd power. Default is 0.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public multiplier!: number
}
