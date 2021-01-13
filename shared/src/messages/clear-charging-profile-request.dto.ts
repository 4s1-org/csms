// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { ClearChargingProfileDto } from '../datatypes/clear-charging-profile.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearChargingProfileRequestDto implements IRequestMessage {
  public constructor() {
    // nothing to do
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
