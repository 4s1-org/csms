// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ClearChargingProfileDto } from '../datatypes/clear-charging-profile.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearChargingProfileRequestDto extends RequestBaseDto {
  public constructor() {
    super()
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The Id of the charging profile to clear.
   */
  @IsOptional()
  @IsInt()
  public chargingProfileId!: number

  @IsOptional()
  @Type(() => ClearChargingProfileDto)
  @ValidateNested()
  public chargingProfileCriteria!: ClearChargingProfileDto
}
