// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingRateUnitEnum } from '../enums/charging-rate-unit.enum'

export class GetCompositeScheduleRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public duration!: number

  @ApiProperty()
  @IsOptional()
  public chargingRateUnit!: ChargingRateUnitEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId!: number
}
