// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsArray, IsEnum, IsInt, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingProfilePurposeEnum } from '../enums/charging-profile-purpose.enum'
import { ChargingLimitSourceEnum } from '../enums/charging-limit-source.enum'

/**
 * Charging_ Profile
 * urn:x-oca:ocpp:uid:2:233255
 * A ChargingProfile consists of ChargingSchedule, describing the amount of power or current that can be delivered per time interval.
 */
export class ChargingProfileCriterionDto {

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsEnum(ChargingProfilePurposeEnum)
  public chargingProfilePurpose!: ChargingProfilePurposeEnum

  /**
   * Charging_ Profile. Stack_ Level. Counter
   * urn:x-oca:ocpp:uid:1:569230
   * Value determining level in hierarchy stack of profiles. Higher values have precedence over lower values. Lowest level is 0.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public stackLevel!: number

  /**
   * List of all the chargingProfileIds requested. Any ChargingProfile that matches one of these profiles will be reported. If omitted, the Charging Station SHALL not filter on chargingProfileId. This field SHALL NOT contain more ids than set in <<configkey-charging-profile-entries,ChargingProfileEntries.maxLimit>>
   */
  @ApiProperty()
  @IsOptional()
  @IsArray()
  public chargingProfileId!: number[]

  /**
   * For which charging limit sources, charging profiles SHALL be reported. If omitted, the Charging Station SHALL not filter on chargingLimitSource.
   */
  @ApiProperty()
  @IsOptional()
  @IsArray()
  public chargingLimitSource!: ChargingLimitSourceEnum[]
}
