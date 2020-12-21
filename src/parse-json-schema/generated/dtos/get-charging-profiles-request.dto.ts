// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ChargingProfileCriterionDto } from './charging-profile-criterion.dto'
import { CustomDataDto } from './custom-data.dto'

export class GetChargingProfilesRequestDto {
  public constructor(
    requestId: number,
    chargingProfile: ChargingProfileCriterionDto,
  ) {
    this.requestId = requestId
    this.chargingProfile = chargingProfile
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Reference identification that is to be used by the Charging Station in the <<reportchargingprofilesrequest, ReportChargingProfilesRequest>> when provided.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * For which EVSE installed charging profiles SHALL be reported. If 0, only charging profiles installed on the Charging Station itself (the grid connection) SHALL be reported. If omitted, all installed charging profiles SHALL be reported.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evseId!: number

  @ApiProperty()
  @IsNotEmpty()
  public chargingProfile: ChargingProfileCriterionDto
}
