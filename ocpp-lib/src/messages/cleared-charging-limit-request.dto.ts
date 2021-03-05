// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingLimitSourceEnum } from '../enumerations/charging-limit-source.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearedChargingLimitRequestDto extends RequestBaseDto {
  private _className: "ClearedChargingLimitRequestDto" = "ClearedChargingLimitRequestDto"

  public constructor(
    chargingLimitSource: ChargingLimitSourceEnum,
  ) {
    super()
    this.chargingLimitSource = chargingLimitSource
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public chargingLimitSource: ChargingLimitSourceEnum

  /**
   * EVSE Identifier.
   */
  public evseId!: number
}
