// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import 'reflect-metadata'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from "class-transformer"
import { RequestBaseDto } from '../generated/request-base.dto'
import { BootReasonEnum } from '../enumerations/boot-reason.enum'
import { ChargingStationDto } from '../datatypes/charging-station.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

/**
 * This contains the field definition of the BootNotificationRequest PDU sent by the Charging Station to the CSMS.
 */
export class BootNotificationRequestDto extends RequestBaseDto {
  public constructor(
    chargingStation: ChargingStationDto,
    reason: BootReasonEnum,
  ) {
    super()
    this.chargingStation = chargingStation
    this.reason = reason
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Identifies the Charging Station
   * Required: true
   * ChargingStationType
   * 1..1
   */
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ChargingStationDto)
  public chargingStation: ChargingStationDto

  /**
   * This contains the reason for sending this message to the CSMS.
   * Required: true
   * BootReasonEnumType
   * 1..1
   */
  @IsNotEmpty()
  @IsEnum(BootReasonEnum)
  public reason: BootReasonEnum
}
