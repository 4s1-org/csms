// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { ChargingProfileCriterionDto } from '../datatypes/charging-profile-criterion.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetChargingProfilesRequestDto implements IRequestMessage {
  public constructor(
    requestId: number,
    chargingProfile: ChargingProfileCriterionDto,
  ) {
    this.requestId = requestId
    this.chargingProfile = chargingProfile
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
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
  @ValidateNested()
  public chargingProfile: ChargingProfileCriterionDto
}
