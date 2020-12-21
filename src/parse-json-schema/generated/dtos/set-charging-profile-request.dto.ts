// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingProfileDto } from './charging-profile.dto'

export class SetChargingProfileRequestDto {
  public constructor(
    evseId: number,
    chargingProfile: ChargingProfileDto,
  ) {
    this.evseId = evseId
    this.chargingProfile = chargingProfile
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * For TxDefaultProfile an evseId=0 applies the profile to each individual evse. For ChargingStationMaxProfile and ChargingStationExternalConstraints an evseId=0 contains an overal limit for the whole Charging Station.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId: number

  @ApiProperty()
  @IsNotEmpty()
  public chargingProfile: ChargingProfileDto
}
