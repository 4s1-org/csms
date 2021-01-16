// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Represents a UnitOfMeasure with a multiplier
 */
export class UnitOfMeasureDto extends DatatypeBaseDto {
  public constructor() {
    super()
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Unit of the value. Default = "Wh" if the (default) measurand is an "Energy" type.
   * This field SHALL use a value from the list Standardized Units of Measurements in Part 2 Appendices. 
   * If an applicable unit is available in that list, otherwise a "custom" unit might be used.
   */
  @IsOptional()
  @MaxLength(20)
  @IsString()
  public unit!: string // DEFAULT VALUE: Wh

  /**
   * Multiplier, this value represents the exponent to base 10. I.e. multiplier 3 means 10 raised to the 3rd power. Default is 0.
   */
  @IsOptional()
  @IsInt()
  public multiplier!: number
}
