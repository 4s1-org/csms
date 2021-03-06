// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ChargingProfilePurposeEnum } from '../enumerations/charging-profile-purpose.enum'
import { CustomDataDto } from './custom-data.dto'

/**
 * Charging_ Profile
 * urn:x-oca:ocpp:uid:2:233255
 * A ChargingProfile consists of a ChargingSchedule, describing the amount of power or current that can be delivered per time interval.
 */
export class ClearChargingProfileDto extends DatatypeBaseDto {
  @Exclude()
  private _className: 'ClearChargingProfileDto' = 'ClearChargingProfileDto'

  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Identified_ Object. MRID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:569198
   * Specifies the id of the EVSE for which to clear charging profiles. An evseId of zero (0) specifies the charging profile for the overall Charging Station. Absence of this parameter means the clearing applies to all charging profiles that match the other criteria in the request.
   */
  public evseId!: number

  public chargingProfilePurpose!: ChargingProfilePurposeEnum

  /**
   * Charging_ Profile. Stack_ Level. Counter
   * urn:x-oca:ocpp:uid:1:569230
   * Specifies the stackLevel for which charging profiles will be cleared, if they meet the other criteria in the request.
   */
  public stackLevel!: number
}
