// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingRateUnitEnum } from '../enums/charging-rate-unit.enum'
import { SalesTariffDto } from './sales-tariff.dto'

/**
 * Charging_ Schedule
urn:x-oca:ocpp:uid:2:233256
Charging schedule structure defines a list of charging periods, as used in: GetCompositeSchedule.conf and ChargingProfile.
 */
export class ChargingScheduleDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id!: number

  /**
   * Charging_ Schedule. Start_ Schedule. Date_ Time
urn:x-oca:ocpp:uid:1:569237
Starting point of an absolute schedule. If absent the schedule will be relative to start of charging.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  public startSchedule!: string

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public duration!: number

  @ApiProperty()
  @IsNotEmpty()
  public chargingRateUnit!: ChargingRateUnitEnum

  @ApiProperty()
  @IsNotEmpty()
  public chargingSchedulePeriod!: any

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  public minChargingRate!: number

  @ApiProperty()
  @IsOptional()
  public salesTariff!: SalesTariffDto
}
