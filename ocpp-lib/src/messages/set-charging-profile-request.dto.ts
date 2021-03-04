// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingProfileDto } from '../datatypes/charging-profile.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class SetChargingProfileRequestDto extends RequestBaseDto {
  private _className: "SetChargingProfileRequestDto" = "SetChargingProfileRequestDto"

  public constructor(
    evseId: number,
    chargingProfile: ChargingProfileDto,
  ) {
    super()
    this.evseId = evseId
    this.chargingProfile = chargingProfile
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * For TxDefaultProfile an evseId=0 applies the profile to each individual evse. For ChargingStationMaxProfile and ChargingStationExternalConstraints an evseId=0 contains an overal limit for the whole Charging Station.
   */
  public evseId: number

  @Type(() => ChargingProfileDto)
  public chargingProfile: ChargingProfileDto
}
