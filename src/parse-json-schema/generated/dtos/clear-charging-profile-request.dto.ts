// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsOptional } from 'class-validator'
import { ClearChargingProfileDto } from './clear-charging-profile.dto'
import { CustomDataDto } from './custom-data.dto'

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
