// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsOptional, ValidateNested } from 'class-validator'
import { ClearChargingProfileDto } from '../dtos/clear-charging-profile.dto'
import { CustomDataDto } from '../dtos/custom-data.dto'

export class ClearChargingProfileRequestDto {

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
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
  @ValidateNested()
  public chargingProfileCriteria!: ClearChargingProfileDto
}
