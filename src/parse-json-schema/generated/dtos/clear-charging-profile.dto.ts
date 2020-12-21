// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsInt, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingProfilePurposeEnum } from '../enums/charging-profile-purpose.enum'

/**
 * Charging_ Profile
urn:x-oca:ocpp:uid:2:233255
A ChargingProfile consists of a ChargingSchedule, describing the amount of power or current that can be delivered per time interval.
 */
export class ClearChargingProfileDto {
  public constructor() {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evseId!: number

  @ApiProperty()
  @IsOptional()
  @IsEnum(ChargingProfilePurposeEnum)
  public chargingProfilePurpose!: ChargingProfilePurposeEnum

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public stackLevel!: number
}
