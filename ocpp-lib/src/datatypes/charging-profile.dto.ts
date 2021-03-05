// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
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
  private _className: "ChargingProfileDto" = "ChargingProfileDto"

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

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Identified_ Object. MRID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:569198
   * Id of ChargingProfile.
   */
  public id: number

  /**
   * Charging_ Profile. Stack_ Level. Counter
   * urn:x-oca:ocpp:uid:1:569230
   * Value determining level in hierarchy stack of profiles. Higher values have precedence over lower values. Lowest level is 0.
   */
  public stackLevel: number

  public chargingProfilePurpose: ChargingProfilePurposeEnum

  public chargingProfileKind: ChargingProfileKindEnum

  public recurrencyKind!: RecurrencyKindEnum

  /**
   * Charging_ Profile. Valid_ From. Date_ Time
   * urn:x-oca:ocpp:uid:1:569234
   * Point in time at which the profile starts to be valid. If absent, the profile is valid as soon as it is received by the Charging Station.
   */
  public validFrom!: string

  /**
   * Charging_ Profile. Valid_ To. Date_ Time
   * urn:x-oca:ocpp:uid:1:569235
   * Point in time at which the profile stops to be valid. If absent, the profile is valid until it is replaced by another profile.
   */
  public validTo!: string

  @Type(() => ChargingScheduleDto)
  public chargingSchedule: ChargingScheduleDto[]

  /**
   * SHALL only be included if ChargingProfilePurpose is set to TxProfile. The transactionId is used to match the profile to a specific transaction.
   */
  public transactionId!: string
}
