// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ChargingLimitSourceEnum } from '../enumerations/charging-limit-source.enum'
import { CustomDataDto } from '../types/custom-data.dto'

export class ClearedChargingLimitRequestDto {
  public constructor(
    chargingLimitSource: ChargingLimitSourceEnum,
  ) {
    this.chargingLimitSource = chargingLimitSource
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChargingLimitSourceEnum)
  public chargingLimitSource: ChargingLimitSourceEnum

  /**
   * EVSE Identifier.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evseId!: number
}
