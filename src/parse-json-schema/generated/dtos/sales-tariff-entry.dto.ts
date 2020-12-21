// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsArray, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { RelativeTimeIntervalDto } from './relative-time-interval.dto'
import { ConsumptionCostDto } from './consumption-cost.dto'

/**
 * Sales_ Tariff_ Entry
 * urn:x-oca:ocpp:uid:2:233271
 */
export class SalesTariffEntryDto {
  public constructor(
    relativeTimeInterval: RelativeTimeIntervalDto,
  ) {
    this.relativeTimeInterval = relativeTimeInterval
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public relativeTimeInterval: RelativeTimeIntervalDto

  /**
   * Sales_ Tariff_ Entry. E_ Price_ Level. Unsigned_ Integer
   * urn:x-oca:ocpp:uid:1:569281
   * Defines the price level of this SalesTariffEntry (referring to NumEPriceLevels). Small values for the EPriceLevel represent a cheaper TariffEntry. Large values for the EPriceLevel represent a more expensive TariffEntry.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public ePriceLevel!: number

  @ApiProperty()
  @IsOptional()
  @IsArray()
  public consumptionCost!: ConsumptionCostDto[]
}
