// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ConsumptionCostDto } from './consumption-cost.dto'
import { CustomDataDto } from './custom-data.dto'
import { RelativeTimeIntervalDto } from './relative-time-interval.dto'

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
  // setMinimum: 0
  @IsInt()
  public ePriceLevel!: number

  @ApiProperty()
  @IsOptional()
  // MinItems: 1
  // MinItems: 3
  @IsArray()
  public consumptionCost!: ConsumptionCostDto[]
}
