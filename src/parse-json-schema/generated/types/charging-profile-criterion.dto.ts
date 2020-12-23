// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsInt, IsOptional, ValidateNested } from 'class-validator'
import { ChargingLimitSourceEnum } from '../enumerations/charging-limit-source.enum'
import { ChargingProfilePurposeEnum } from '../enumerations/charging-profile-purpose.enum'
import { CustomDataDto } from './custom-data.dto'

/**
 * Charging_ Profile
 * urn:x-oca:ocpp:uid:2:233255
 * A ChargingProfile consists of ChargingSchedule, describing the amount of power or current that can be delivered per time interval.
 */
export class ChargingProfileCriterionDto {
  public constructor() {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
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
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public chargingProfileId!: number[]

  /**
   * For which charging limit sources, charging profiles SHALL be reported. If omitted, the Charging Station SHALL not filter on chargingLimitSource.
   */
  @ApiProperty()
  @IsOptional()
  @ArrayMinSize(1)
  @ArrayMaxSize(4)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public chargingLimitSource!: ChargingLimitSourceEnum[]
}
