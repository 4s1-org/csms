// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingProfileCriterionDto } from './charging-profile-criterion.dto'

export class GetChargingProfilesRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public requestId!: number

  @IsOptional()
  @ApiProperty()
  public evseId!: number

  @IsNotEmpty()
  @ApiProperty()
  public chargingProfile!: ChargingProfileCriterionDto
}
