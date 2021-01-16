// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingLimitSourceEnum } from '../enumerations/charging-limit-source.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearedChargingLimitRequestDto extends RequestBaseDto {
  public constructor(
    chargingLimitSource: ChargingLimitSourceEnum,
  ) {
    super()
    this.chargingLimitSource = chargingLimitSource
  }

  @IsOptional()
  @Type(() => CustomDataDto)
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
