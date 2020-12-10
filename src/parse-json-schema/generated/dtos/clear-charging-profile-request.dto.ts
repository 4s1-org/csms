// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ClearChargingProfileDto } from './clear-charging-profile.dto'

export class ClearChargingProfileRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public chargingProfileId: number

  @IsOptional()
  @ApiProperty()
  public chargingProfileCriteria: ClearChargingProfileDto
}
