// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ClearChargingProfileDto } from './clear-charging-profile.dto'

export class ClearChargingProfileRequestDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public chargingProfileId!: number

  @ApiProperty()
  @IsOptional()
  public chargingProfileCriteria!: ClearChargingProfileDto
}
