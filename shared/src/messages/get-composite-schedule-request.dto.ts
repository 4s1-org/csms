// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { ChargingRateUnitEnum } from '../enumerations/charging-rate-unit.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetCompositeScheduleRequestDto implements IRequestMessage {
  public constructor(
    duration: number,
    evseId: number,
  ) {
    this.duration = duration
    this.evseId = evseId
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Length of the requested schedule in seconds.
   */
  @IsNotEmpty()
  @IsInt()
  public duration: number

  @IsOptional()
  @IsEnum(ChargingRateUnitEnum)
  public chargingRateUnit!: ChargingRateUnitEnum

  /**
   * The ID of the EVSE for which the schedule is requested. When evseid=0, the Charging Station will calculate the expected consumption for the grid connection.
   */
  @IsNotEmpty()
  @IsInt()
  public evseId: number
}
