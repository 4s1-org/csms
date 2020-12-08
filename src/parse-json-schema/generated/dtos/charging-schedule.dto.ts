import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingRateUnitEnumDto } from './charging-rate-unit-enum.dto'
import { SalesTariffDto } from './sales-tariff.dto'

/**
 * Charging_ Schedule
urn:x-oca:ocpp:uid:2:233256
Charging schedule structure defines a list of charging periods, as used in: GetCompositeSchedule.conf and ChargingProfile.
 */
export class ChargingScheduleDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public id: number

  /**
   * Charging_ Schedule. Start_ Schedule. Date_ Time
urn:x-oca:ocpp:uid:1:569237
Starting point of an absolute schedule. If absent the schedule will be relative to start of charging.
   */
  @IsOptional()
  @ApiProperty()
  public startSchedule: string

  @IsOptional()
  @ApiProperty()
  public duration: number

  @ApiProperty()
  public chargingRateUnit: ChargingRateUnitEnumDto

  @ApiProperty()
  public chargingSchedulePeriod: any

  @IsOptional()
  @ApiProperty()
  public minChargingRate: number

  @IsOptional()
  @ApiProperty()
  public salesTariff: SalesTariffDto
}
