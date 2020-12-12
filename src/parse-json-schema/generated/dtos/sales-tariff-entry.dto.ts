// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { RelativeTimeIntervalDto } from './relative-time-interval.dto'

/**
 * Sales_ Tariff_ Entry
urn:x-oca:ocpp:uid:2:233271
 */
export class SalesTariffEntryDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public relativeTimeInterval!: RelativeTimeIntervalDto

  @IsOptional()
  @ApiProperty()
  public ePriceLevel!: number

  @IsOptional()
  @ApiProperty()
  public consumptionCost!: any
}
