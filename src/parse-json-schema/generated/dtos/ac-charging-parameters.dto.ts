// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * AC_ Charging_ Parameters
urn:x-oca:ocpp:uid:2:233250
EV AC charging parameters.
 */
export class ACChargingParametersDto {
  public constructor (
    energyAmount: number,
    evMinCurrent: number,
    evMaxCurrent: number,
    evMaxVoltage: number
  ) {
    this.energyAmount = energyAmount
    this.evMinCurrent = evMinCurrent
    this.evMaxCurrent = evMaxCurrent
    this.evMaxVoltage = evMaxVoltage
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public energyAmount!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evMinCurrent!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evMaxCurrent!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evMaxVoltage!: number
}
