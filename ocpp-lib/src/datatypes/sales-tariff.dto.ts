// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { SalesTariffEntryDto } from './sales-tariff-entry.dto'

/**
 * Sales_ Tariff
 * urn:x-oca:ocpp:uid:2:233272
 * NOTE: This dataType is based on dataTypes from <<ref-ISOIEC15118-2,ISO 15118-2>>.
 */
export class SalesTariffDto extends DatatypeBaseDto {
  @Exclude()
  private _className: "SalesTariffDto" = "SalesTariffDto"

  public constructor(
    id: number,
    salesTariffEntry: SalesTariffEntryDto[],
  ) {
    super()
    this.id = id
    this.salesTariffEntry = salesTariffEntry
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Identified_ Object. MRID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:569198
   * SalesTariff identifier used to identify one sales tariff. An SAID remains a unique identifier for one schedule throughout a charging session.
   */
  public id: number

  /**
   * Sales_ Tariff. Sales. Tariff_ Description
   * urn:x-oca:ocpp:uid:1:569283
   * A human readable title/short description of the sales tariff e.g. for HMI display purposes.
   */
  public salesTariffDescription!: string

  /**
   * Sales_ Tariff. Num_ E_ Price_ Levels. Counter
   * urn:x-oca:ocpp:uid:1:569284
   * Defines the overall number of distinct price levels used across all provided SalesTariff elements.
   */
  public numEPriceLevels!: number

  @Type(() => SalesTariffEntryDto)
  public salesTariffEntry: SalesTariffEntryDto[]
}
