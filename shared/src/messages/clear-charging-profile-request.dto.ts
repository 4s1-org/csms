// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ClearChargingProfileDto } from '../datatypes/clear-charging-profile.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearChargingProfileRequestDto extends RequestBaseDto {
  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * The Id of the charging profile to clear.
   */
  public chargingProfileId!: number

  @Type(() => ClearChargingProfileDto)
  public chargingProfileCriteria!: ClearChargingProfileDto
}
