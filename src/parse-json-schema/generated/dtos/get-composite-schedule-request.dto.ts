// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingRateUnitEnum } from '../enums/charging-rate-unit.enum'

export class GetCompositeScheduleRequestDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public duration!: number

  @ApiProperty()
  @IsOptional()
  @IsEnum(ChargingRateUnitEnum)
  public chargingRateUnit!: ChargingRateUnitEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId!: number
}
