// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { BootReasonEnum } from '../enumerations/boot-reason.enum'
import { ChargingStationDto } from '../types/charging-station.dto'
import { CustomDataDto } from '../types/custom-data.dto'

/**
 * This contains the field definition of the BootNotificationRequest PDU sent by the Charging Station to the CSMS.
 */
export class BootNotificationRequestDto {
  public constructor(
    chargingStation: ChargingStationDto,
    reason: BootReasonEnum,
  ) {
    this.chargingStation = chargingStation
    this.reason = reason
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Identifies the Charging Station
   * Required: true
   * ChargingStationType
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public chargingStation: ChargingStationDto

  /**
   * This contains the reason for sending this message to the CSMS.
   * Required: true
   * BootReasonEnumType
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(BootReasonEnum)
  public reason: BootReasonEnum
}
