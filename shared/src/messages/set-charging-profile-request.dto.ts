// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingProfileDto } from '../datatypes/charging-profile.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class SetChargingProfileRequestDto extends RequestBaseDto {
  public constructor(
    evseId: number,
    chargingProfile: ChargingProfileDto,
  ) {
    super()
    this.evseId = evseId
    this.chargingProfile = chargingProfile
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * For TxDefaultProfile an evseId=0 applies the profile to each individual evse. For ChargingStationMaxProfile and ChargingStationExternalConstraints an evseId=0 contains an overal limit for the whole Charging Station.
   */
  @IsNotEmpty()
  @IsInt()
  public evseId: number

  @IsNotEmpty()
  @ValidateNested()
  public chargingProfile: ChargingProfileDto
}
