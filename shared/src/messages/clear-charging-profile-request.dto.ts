// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ClearChargingProfileDto } from '../datatypes/clear-charging-profile.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearChargingProfileRequestDto extends RequestBaseDto {
  public constructor() {
    super()
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The Id of the charging profile to clear.
   */
  @IsOptional()
  @IsInt()
  public chargingProfileId!: number

  @IsOptional()
  @ValidateNested()
  public chargingProfileCriteria!: ClearChargingProfileDto
}
