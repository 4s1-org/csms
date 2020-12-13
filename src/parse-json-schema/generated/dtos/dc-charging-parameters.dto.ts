// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * DC_ Charging_ Parameters
urn:x-oca:ocpp:uid:2:233251
EV DC charging parameters
 */
export class DCChargingParametersDto {
  public constructor (
    evMaxCurrent: number,
    evMaxVoltage: number
  ) {
    this.evMaxCurrent = evMaxCurrent
    this.evMaxVoltage = evMaxVoltage
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evMaxCurrent: number

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evMaxVoltage: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public energyAmount!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evMaxPower!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public stateOfCharge!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evEnergyCapacity!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public fullSoC!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public bulkSoC!: number
}
