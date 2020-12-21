// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ChargingLimitSourceEnum } from '../enums/charging-limit-source.enum'
import { CustomDataDto } from './custom-data.dto'

export class ClearedChargingLimitRequestDto {
  public constructor(
    chargingLimitSource: ChargingLimitSourceEnum,
  ) {
    this.chargingLimitSource = chargingLimitSource
  }

  @ApiProperty()
  @IsOptional()
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
