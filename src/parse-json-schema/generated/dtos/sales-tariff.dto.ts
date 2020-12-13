// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Sales_ Tariff
urn:x-oca:ocpp:uid:2:233272
NOTE: This dataType is based on dataTypes from <<ref-ISOIEC15118-2,ISO 15118-2>>.
 */
export class SalesTariffDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id!: number

  /**
   * Sales_ Tariff. Sales. Tariff_ Description
urn:x-oca:ocpp:uid:1:569283
A human readable title/short description of the sales tariff e.g. for HMI display purposes.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 32)
  @IsString()
  public salesTariffDescription!: string

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public numEPriceLevels!: number

  @ApiProperty()
  @IsNotEmpty()
  public salesTariffEntry!: any
}
