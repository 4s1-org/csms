// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { ResetEnum } from '../enumerations/reset.enum'

export class ResetRequestDto extends RequestBaseDto {
  private _className: "ResetRequestDto" = "ResetRequestDto"

  public constructor(
    type: ResetEnum,
  ) {
    super()
    this.type = type
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public type: ResetEnum

  /**
   * This contains the ID of a specific EVSE that needs to be reset, instead of the entire Charging Station.
   */
  public evseId!: number
}
