// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ChargingLimitSourceEnum } from '../enumerations/charging-limit-source.enum'
import { ChargingProfilePurposeEnum } from '../enumerations/charging-profile-purpose.enum'
import { CustomDataDto } from './custom-data.dto'

/**
 * Charging_ Profile
 * urn:x-oca:ocpp:uid:2:233255
 * A ChargingProfile consists of ChargingSchedule, describing the amount of power or current that can be delivered per time interval.
 */
export class ChargingProfileCriterionDto extends DatatypeBaseDto {
  @Exclude()
  private _className: 'ChargingProfileCriterionDto' = 'ChargingProfileCriterionDto'

  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public chargingProfilePurpose!: ChargingProfilePurposeEnum

  /**
   * Charging_ Profile. Stack_ Level. Counter
   * urn:x-oca:ocpp:uid:1:569230
   * Value determining level in hierarchy stack of profiles. Higher values have precedence over lower values. Lowest level is 0.
   */
  public stackLevel!: number

  /**
   * List of all the chargingProfileIds requested. Any ChargingProfile that matches one of these profiles will be reported. If omitted, the Charging Station SHALL not filter on chargingProfileId. This field SHALL NOT contain more ids than set in <<configkey-charging-profile-entries,ChargingProfileEntries.maxLimit>>
   */
  public chargingProfileId!: number[]

  /**
   * For which charging limit sources, charging profiles SHALL be reported. If omitted, the Charging Station SHALL not filter on chargingLimitSource.
   */
  public chargingLimitSource!: ChargingLimitSourceEnum[]
}
