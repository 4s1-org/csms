// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingLimitSourceEnum } from '../enumerations/charging-limit-source.enum'
import { ChargingProfileDto } from '../datatypes/charging-profile.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ReportChargingProfilesRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: 'ReportChargingProfilesRequestDto' = 'ReportChargingProfilesRequestDto'

  public constructor(
    requestId: number,
    chargingLimitSource: ChargingLimitSourceEnum,
    chargingProfile: ChargingProfileDto[],
    evseId: number,
  ) {
    super()
    this.requestId = requestId
    this.chargingLimitSource = chargingLimitSource
    this.chargingProfile = chargingProfile
    this.evseId = evseId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Id used to match the <<getchargingprofilesrequest, GetChargingProfilesRequest>> message with the resulting ReportChargingProfilesRequest messages. When the CSMS provided a requestId in the <<getchargingprofilesrequest, GetChargingProfilesRequest>>, this field SHALL contain the same value.
   */
  public requestId: number

  public chargingLimitSource: ChargingLimitSourceEnum

  @Type(() => ChargingProfileDto)
  public chargingProfile: ChargingProfileDto[]

  /**
   * To Be Continued. Default value when omitted: false. false indicates that there are no further messages as part of this report.
   */
  public tbc!: boolean

  /**
   * The evse to which the charging profile applies. If evseId = 0, the message contains an overall limit for the Charging Station.
   */
  public evseId: number
}
