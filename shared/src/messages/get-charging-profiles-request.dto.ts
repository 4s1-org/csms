// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingProfileCriterionDto } from '../datatypes/charging-profile-criterion.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetChargingProfilesRequestDto extends RequestBaseDto {
  public constructor(
    requestId: number,
    chargingProfile: ChargingProfileCriterionDto,
  ) {
    super()
    this.requestId = requestId
    this.chargingProfile = chargingProfile
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Reference identification that is to be used by the Charging Station in the <<reportchargingprofilesrequest, ReportChargingProfilesRequest>> when provided.
   */
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * For which EVSE installed charging profiles SHALL be reported. If 0, only charging profiles installed on the Charging Station itself (the grid connection) SHALL be reported. If omitted, all installed charging profiles SHALL be reported.
   */
  @IsOptional()
  @IsInt()
  public evseId!: number

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ChargingProfileCriterionDto)
  public chargingProfile: ChargingProfileCriterionDto
}
