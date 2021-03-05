// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Represents a UnitOfMeasure with a multiplier
 */
export class UnitOfMeasureDto extends DatatypeBaseDto {
  @Exclude()
  private _className: "UnitOfMeasureDto" = "UnitOfMeasureDto"

  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Unit of the value. Default = "Wh" if the (default) measurand is an "Energy" type.
   * This field SHALL use a value from the list Standardized Units of Measurements in Part 2 Appendices. 
   * If an applicable unit is available in that list, otherwise a "custom" unit might be used.
   */
  public unit!: string // DEFAULT VALUE: Wh

  /**
   * Multiplier, this value represents the exponent to base 10. I.e. multiplier 3 means 10 raised to the 3rd power. Default is 0.
   */
  public multiplier!: number
}
