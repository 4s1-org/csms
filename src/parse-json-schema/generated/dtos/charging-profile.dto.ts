// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingProfilePurposeEnum } from '../enums/charging-profile-purpose.enum'
import { ChargingProfileKindEnum } from '../enums/charging-profile-kind.enum'
import { RecurrencyKindEnum } from '../enums/recurrency-kind.enum'
import { ChargingScheduleDto } from './charging-schedule.dto'

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
  @IsString()
  public validFrom!: string

  /**
   * Charging_ Profile. Valid_ To. Date_ Time
   * urn:x-oca:ocpp:uid:1:569235
   * Point in time at which the profile stops to be valid. If absent, the profile is valid until it is replaced by another profile.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  public validTo!: string

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  public chargingSchedule: ChargingScheduleDto[]

  /**
   * SHALL only be included if ChargingProfilePurpose is set to TxProfile. The transactionId is used to match the profile to a specific transaction.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 36)
  public transactionId!: string
}
