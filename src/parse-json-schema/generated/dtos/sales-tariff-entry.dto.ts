// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { RelativeTimeIntervalDto } from './relative-time-interval.dto'

/**
 * Sales_ Tariff_ Entry
urn:x-oca:ocpp:uid:2:233271
 */
export class SalesTariffEntryDto {
  public constructor(
    relativeTimeInterval: RelativeTimeIntervalDto
  ) {
    this.relativeTimeInterval = relativeTimeInterval
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public relativeTimeInterval: RelativeTimeIntervalDto

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public ePriceLevel!: number

  @ApiProperty()
  @IsOptional()
  public consumptionCost!: any
}
