// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsDateString, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ChargingRateUnitEnum } from '../enumerations/charging-rate-unit.enum'
import { ChargingSchedulePeriodDto } from './charging-schedule-period.dto'
import { CustomDataDto } from './custom-data.dto'
import { SalesTariffDto } from './sales-tariff.dto'

/**
 * Charging_ Schedule
 * urn:x-oca:ocpp:uid:2:233256
 * Charging schedule structure defines a list of charging periods, as used in: GetCompositeSchedule.conf and ChargingProfile.
 */
export class ChargingScheduleDto extends DatatypeBaseDto {
  public constructor(
    id: number,
    chargingRateUnit: ChargingRateUnitEnum,
    chargingSchedulePeriod: ChargingSchedulePeriodDto[],
  ) {
    super()
    this.id = id
    this.chargingRateUnit = chargingRateUnit
    this.chargingSchedulePeriod = chargingSchedulePeriod
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Identifies the ChargingSchedule.
   */
  @IsNotEmpty()
  @IsInt()
  public id: number

  /**
   * Charging_ Schedule. Start_ Schedule. Date_ Time
   * urn:x-oca:ocpp:uid:1:569237
   * Starting point of an absolute schedule. If absent the schedule will be relative to start of charging.
   */
  @IsOptional()
  @IsDateString()
  public startSchedule!: string

  /**
   * Charging_ Schedule. Duration. Elapsed_ Time
   * urn:x-oca:ocpp:uid:1:569236
   * Duration of the charging schedule in seconds. If the duration is left empty, the last period will continue indefinitely or until end of the transaction if chargingProfilePurpose = TxProfile.
   */
  @IsOptional()
  @IsInt()
  public duration!: number

  @IsNotEmpty()
  @IsEnum(ChargingRateUnitEnum)
  public chargingRateUnit: ChargingRateUnitEnum

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ArrayMaxSize(1024)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ChargingSchedulePeriodDto)
  public chargingSchedulePeriod: ChargingSchedulePeriodDto[]

  /**
   * Charging_ Schedule. Min_ Charging_ Rate. Numeric
   * urn:x-oca:ocpp:uid:1:569239
   * Minimum charging rate supported by the EV. The unit of measure is defined by the chargingRateUnit. This parameter is intended to be used by a local smart charging algorithm to optimize the power allocation for in the case a charging process is inefficient at lower charging rates. Accepts at most one digit fraction (e.g. 8.1)
   */
  @IsOptional()
  @IsNumber()
  public minChargingRate!: number

  @IsOptional()
  @ValidateNested()
  @Type(() => SalesTariffDto)
  public salesTariff!: SalesTariffDto
}
