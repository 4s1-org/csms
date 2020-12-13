// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingProfileDto } from './charging-profile.dto'

export class SetChargingProfileRequestDto {
  public constructor (
    evseId: number
  ) {
    this.evseId = evseId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId!: number

  @ApiProperty()
  @IsNotEmpty()
  public chargingProfile!: ChargingProfileDto
}
