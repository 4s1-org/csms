// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ConsumptionCostDto } from './consumption-cost.dto'
import { CustomDataDto } from './custom-data.dto'
import { RelativeTimeIntervalDto } from './relative-time-interval.dto'

/**
 * Sales_ Tariff_ Entry
 * urn:x-oca:ocpp:uid:2:233271
 */
export class SalesTariffEntryDto extends DatatypeBaseDto {
  @Exclude()
  private _className: 'SalesTariffEntryDto' = 'SalesTariffEntryDto'

  public constructor(
    relativeTimeInterval: RelativeTimeIntervalDto,
  ) {
    super()
    this.relativeTimeInterval = relativeTimeInterval
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => RelativeTimeIntervalDto)
  public relativeTimeInterval: RelativeTimeIntervalDto

  /**
   * Sales_ Tariff_ Entry. E_ Price_ Level. Unsigned_ Integer
   * urn:x-oca:ocpp:uid:1:569281
   * Defines the price level of this SalesTariffEntry (referring to NumEPriceLevels). Small values for the EPriceLevel represent a cheaper TariffEntry. Large values for the EPriceLevel represent a more expensive TariffEntry.
   */
  public ePriceLevel!: number

  @Type(() => ConsumptionCostDto)
  public consumptionCost!: ConsumptionCostDto[]
}
