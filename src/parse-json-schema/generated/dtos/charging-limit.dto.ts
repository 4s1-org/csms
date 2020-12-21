// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingLimitSourceEnum } from '../enums/charging-limit-source.enum'

/**
 * Charging_ Limit
 * urn:x-enexis:ecdm:uid:2:234489
 */
export class ChargingLimitDto {
  public constructor(
    chargingLimitSource: ChargingLimitSourceEnum,
  ) {
    this.chargingLimitSource = chargingLimitSource
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChargingLimitSourceEnum)
  public chargingLimitSource: ChargingLimitSourceEnum

  /**
   * Charging_ Limit. Is_ Grid_ Critical. Indicator
   * urn:x-enexis:ecdm:uid:1:570847
   * Indicates whether the charging limit is critical for the grid.
   */
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public isGridCritical!: boolean
}
