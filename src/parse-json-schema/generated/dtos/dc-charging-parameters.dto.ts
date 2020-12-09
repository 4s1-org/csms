// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * DC_ Charging_ Parameters
urn:x-oca:ocpp:uid:2:233251
EV DC charging parameters
 */
export class DCChargingParametersDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public evMaxCurrent: number

  @ApiProperty()
  public evMaxVoltage: number

  @IsOptional()
  @ApiProperty()
  public energyAmount: number

  @IsOptional()
  @ApiProperty()
  public evMaxPower: number

  @IsOptional()
  @ApiProperty()
  public stateOfCharge: number

  @IsOptional()
  @ApiProperty()
  public evEnergyCapacity: number

  @IsOptional()
  @ApiProperty()
  public fullSoC: number

  @IsOptional()
  @ApiProperty()
  public bulkSoC: number
}
