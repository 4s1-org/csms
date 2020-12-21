// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingRateUnitEnum } from '../enums/charging-rate-unit.enum'

export class GetCompositeScheduleRequestDto {
  public constructor(
    duration: number,
    evseId: number,
  ) {
    this.duration = duration
    this.evseId = evseId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Length of the requested schedule in seconds.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public duration: number

  @ApiProperty()
  @IsOptional()
  @IsEnum(ChargingRateUnitEnum)
  public chargingRateUnit!: ChargingRateUnitEnum

  /**
   * The ID of the EVSE for which the schedule is requested. When evseid=0, the Charging Station will calculate the expected consumption for the grid connection.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId: number
}
