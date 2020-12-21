// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingProfileCriterionDto } from './charging-profile-criterion.dto'

export class GetChargingProfilesRequestDto {
  public constructor(
    requestId: number,
    chargingProfile: ChargingProfileCriterionDto
  ) {
    this.requestId = requestId
    this.chargingProfile = chargingProfile
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evseId!: number

  @ApiProperty()
  @IsNotEmpty()
  public chargingProfile: ChargingProfileCriterionDto
}
