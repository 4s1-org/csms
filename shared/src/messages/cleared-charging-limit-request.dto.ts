// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { ChargingLimitSourceEnum } from '../enumerations/charging-limit-source.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearedChargingLimitRequestDto implements IRequestMessage {
  public constructor(
    chargingLimitSource: ChargingLimitSourceEnum,
  ) {
    this.chargingLimitSource = chargingLimitSource
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(ChargingLimitSourceEnum)
  public chargingLimitSource: ChargingLimitSourceEnum

  /**
   * EVSE Identifier.
   */
  @IsOptional()
  @IsInt()
  public evseId!: number
}
