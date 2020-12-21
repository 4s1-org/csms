// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ClearChargingProfileDto } from './clear-charging-profile.dto'

export class ClearChargingProfileRequestDto {

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * The Id of the charging profile to clear.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public chargingProfileId!: number

  @ApiProperty()
  @IsOptional()
  public chargingProfileCriteria!: ClearChargingProfileDto
}
