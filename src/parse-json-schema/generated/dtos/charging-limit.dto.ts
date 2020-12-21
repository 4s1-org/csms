// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsBoolean, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingLimitSourceEnum } from '../enums/charging-limit-source.enum'

/**
 * Charging_ Limit
urn:x-enexis:ecdm:uid:2:234489
 */
export class ChargingLimitDto {
  public constructor(
    chargingLimitSource: ChargingLimitSourceEnum
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

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public isGridCritical!: boolean
}
