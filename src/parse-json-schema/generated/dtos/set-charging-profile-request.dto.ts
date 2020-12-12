// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingProfileDto } from './charging-profile.dto'

export class SetChargingProfileRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public evseId!: number

  @IsNotEmpty()
  @ApiProperty()
  public chargingProfile!: ChargingProfileDto
}
