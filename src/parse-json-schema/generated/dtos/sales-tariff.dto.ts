// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Sales_ Tariff
urn:x-oca:ocpp:uid:2:233272
NOTE: This dataType is based on dataTypes from <<ref-ISOIEC15118-2,ISO 15118-2>>.
 */
export class SalesTariffDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public id: number

  /**
   * Sales_ Tariff. Sales. Tariff_ Description
urn:x-oca:ocpp:uid:1:569283
A human readable title/short description of the sales tariff e.g. for HMI display purposes.
   */
  @IsOptional()
  @Length(0, 32)
  @ApiProperty()
  public salesTariffDescription: string

  @IsOptional()
  @ApiProperty()
  public numEPriceLevels: number

  @ApiProperty()
  public salesTariffEntry: any
}
