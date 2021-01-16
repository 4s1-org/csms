// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ChargingLimitSourceEnum } from '../enumerations/charging-limit-source.enum'
import { CustomDataDto } from './custom-data.dto'

/**
 * Charging_ Limit
 * urn:x-enexis:ecdm:uid:2:234489
 */
export class ChargingLimitDto extends DatatypeBaseDto {
  public constructor(
    chargingLimitSource: ChargingLimitSourceEnum,
  ) {
    super()
    this.chargingLimitSource = chargingLimitSource
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(ChargingLimitSourceEnum)
  public chargingLimitSource: ChargingLimitSourceEnum

  /**
   * Charging_ Limit. Is_ Grid_ Critical. Indicator
   * urn:x-enexis:ecdm:uid:1:570847
   * Indicates whether the charging limit is critical for the grid.
   */
  @IsOptional()
  @IsBoolean()
  public isGridCritical!: boolean
}
