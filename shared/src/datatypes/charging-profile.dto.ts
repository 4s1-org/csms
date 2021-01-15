// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
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
export class ChargingProfileDto extends DatatypeBaseDto {
  public constructor(
    id: number,
    stackLevel: number,
    chargingProfilePurpose: ChargingProfilePurposeEnum,
    chargingProfileKind: ChargingProfileKindEnum,
    chargingSchedule: ChargingScheduleDto[],
  ) {
    super()
    this.id = id
    this.stackLevel = stackLevel
    this.chargingProfilePurpose = chargingProfilePurpose
    this.chargingProfileKind = chargingProfileKind
    this.chargingSchedule = chargingSchedule
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Identified_ Object. MRID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:569198
   * Id of ChargingProfile.
   */
  @IsNotEmpty()
  @IsInt()
  public id: number

  /**
   * Charging_ Profile. Stack_ Level. Counter
   * urn:x-oca:ocpp:uid:1:569230
   * Value determining level in hierarchy stack of profiles. Higher values have precedence over lower values. Lowest level is 0.
   */
  @IsNotEmpty()
  @IsInt()
  public stackLevel: number

  @IsNotEmpty()
  @IsEnum(ChargingProfilePurposeEnum)
  public chargingProfilePurpose: ChargingProfilePurposeEnum

  @IsNotEmpty()
  @IsEnum(ChargingProfileKindEnum)
  public chargingProfileKind: ChargingProfileKindEnum

  @IsOptional()
  @IsEnum(RecurrencyKindEnum)
  public recurrencyKind!: RecurrencyKindEnum

  /**
   * Charging_ Profile. Valid_ From. Date_ Time
   * urn:x-oca:ocpp:uid:1:569234
   * Point in time at which the profile starts to be valid. If absent, the profile is valid as soon as it is received by the Charging Station.
   */
  @IsOptional()
  @IsDateString()
  public validFrom!: string

  /**
   * Charging_ Profile. Valid_ To. Date_ Time
   * urn:x-oca:ocpp:uid:1:569235
   * Point in time at which the profile stops to be valid. If absent, the profile is valid until it is replaced by another profile.
   */
  @IsOptional()
  @IsDateString()
  public validTo!: string

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public chargingSchedule: ChargingScheduleDto[]

  /**
   * SHALL only be included if ChargingProfilePurpose is set to TxProfile. The transactionId is used to match the profile to a specific transaction.
   */
  @IsOptional()
  @MaxLength(36)
  @IsString()
  public transactionId!: string
}
