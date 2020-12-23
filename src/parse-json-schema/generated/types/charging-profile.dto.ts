// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { ChargingProfileKindEnum } from '../enumerations/charging-profile-kind.enum'
import { ChargingProfilePurposeEnum } from '../enumerations/charging-profile-purpose.enum'
import { ChargingScheduleDto } from './charging-schedule.dto'
import { CustomDataDto } from './custom-data.dto'
import { RecurrencyKindEnum } from '../enumerations/recurrency-kind.enum'

/**
 * Charging_ Profile
 * urn:x-oca:ocpp:uid:2:233255
 * A ChargingProfile consists of ChargingSchedule, describing the amount of power or current that can be delivered per time interval.
 */
export class ChargingProfileDto {
  public constructor(
    id: number,
    stackLevel: number,
    chargingProfilePurpose: ChargingProfilePurposeEnum,
    chargingProfileKind: ChargingProfileKindEnum,
    chargingSchedule: ChargingScheduleDto[],
  ) {
    this.id = id
    this.stackLevel = stackLevel
    this.chargingProfilePurpose = chargingProfilePurpose
    this.chargingProfileKind = chargingProfileKind
    this.chargingSchedule = chargingSchedule
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Identified_ Object. MRID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:569198
   * Id of ChargingProfile.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id: number

  /**
   * Charging_ Profile. Stack_ Level. Counter
   * urn:x-oca:ocpp:uid:1:569230
   * Value determining level in hierarchy stack of profiles. Higher values have precedence over lower values. Lowest level is 0.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public stackLevel: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChargingProfilePurposeEnum)
  public chargingProfilePurpose: ChargingProfilePurposeEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChargingProfileKindEnum)
  public chargingProfileKind: ChargingProfileKindEnum

  @ApiProperty()
  @IsOptional()
  @IsEnum(RecurrencyKindEnum)
  public recurrencyKind!: RecurrencyKindEnum

  /**
   * Charging_ Profile. Valid_ From. Date_ Time
   * urn:x-oca:ocpp:uid:1:569234
   * Point in time at which the profile starts to be valid. If absent, the profile is valid as soon as it is received by the Charging Station.
   */
  @ApiProperty()
  @IsOptional()
  // setFormat: date-time
  @IsString()
  public validFrom!: string

  /**
   * Charging_ Profile. Valid_ To. Date_ Time
   * urn:x-oca:ocpp:uid:1:569235
   * Point in time at which the profile stops to be valid. If absent, the profile is valid until it is replaced by another profile.
   */
  @ApiProperty()
  @IsOptional()
  // setFormat: date-time
  @IsString()
  public validTo!: string

  @ApiProperty()
  @IsNotEmpty()
  // MinItems: 1
  // MinItems: 3
  @IsArray()
  @ValidateNested()
  public chargingSchedule: ChargingScheduleDto[]

  /**
   * SHALL only be included if ChargingProfilePurpose is set to TxProfile. The transactionId is used to match the profile to a specific transaction.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(36)
  @IsString()
  public transactionId!: string
}
