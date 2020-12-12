// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * AC_ Charging_ Parameters
urn:x-oca:ocpp:uid:2:233250
EV AC charging parameters.
 */
export class ACChargingParametersDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public energyAmount!: number

  @IsNotEmpty()
  @ApiProperty()
  public evMinCurrent!: number

  @IsNotEmpty()
  @ApiProperty()
  public evMaxCurrent!: number

  @IsNotEmpty()
  @ApiProperty()
  public evMaxVoltage!: number
}
