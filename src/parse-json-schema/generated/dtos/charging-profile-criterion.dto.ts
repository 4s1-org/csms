// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingProfilePurposeEnum } from '../enums/charging-profile-purpose.enum'

/**
 * Charging_ Profile
urn:x-oca:ocpp:uid:2:233255
A ChargingProfile consists of ChargingSchedule, describing the amount of power or current that can be delivered per time interval.
 */
export class ChargingProfileCriterionDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public chargingProfilePurpose!: ChargingProfilePurposeEnum

  @IsOptional()
  @ApiProperty()
  public stackLevel!: number

  @IsOptional()
  @ApiProperty()
  public chargingProfileId!: any

  @IsOptional()
  @ApiProperty()
  public chargingLimitSource!: any
}
