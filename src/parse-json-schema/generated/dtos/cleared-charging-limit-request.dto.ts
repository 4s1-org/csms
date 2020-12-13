// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingLimitSourceEnum } from '../enums/charging-limit-source.enum'

export class ClearedChargingLimitRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public chargingLimitSource!: ChargingLimitSourceEnum

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evseId!: number
}
