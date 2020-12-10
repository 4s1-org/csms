// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingLimitSourceEnum } from '../enums/charging-limit-source.enum'

export class ClearedChargingLimitRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public chargingLimitSource: ChargingLimitSourceEnum

  @IsOptional()
  @ApiProperty()
  public evseId: number
}
