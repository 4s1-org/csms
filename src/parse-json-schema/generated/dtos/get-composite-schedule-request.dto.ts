// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingRateUnitEnum } from '../enums/charging-rate-unit.enum'

export class GetCompositeScheduleRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public duration!: number

  @IsOptional()
  @ApiProperty()
  public chargingRateUnit!: ChargingRateUnitEnum

  @IsNotEmpty()
  @ApiProperty()
  public evseId!: number
}
