// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * AC_ Charging_ Parameters
 * urn:x-oca:ocpp:uid:2:233250
 * EV AC charging parameters.
 */
export class ACChargingParametersDto {
  public constructor(
    energyAmount: number,
    evMinCurrent: number,
    evMaxCurrent: number,
    evMaxVoltage: number,
  ) {
    this.energyAmount = energyAmount
    this.evMinCurrent = evMinCurrent
    this.evMaxCurrent = evMaxCurrent
    this.evMaxVoltage = evMaxVoltage
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * AC_ Charging_ Parameters. Energy_ Amount. Energy_ Amount
   * urn:x-oca:ocpp:uid:1:569211
   * Amount of energy requested (in Wh). This includes energy required for preconditioning.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public energyAmount: number

  /**
   * AC_ Charging_ Parameters. EV_ Min. Current
   * urn:x-oca:ocpp:uid:1:569212
   * Minimum current (amps) supported by the electric vehicle (per phase).
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evMinCurrent: number

  /**
   * AC_ Charging_ Parameters. EV_ Max. Current
   * urn:x-oca:ocpp:uid:1:569213
   * Maximum current (amps) supported by the electric vehicle (per phase). Includes cable capacity.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evMaxCurrent: number

  /**
   * AC_ Charging_ Parameters. EV_ Max. Voltage
   * urn:x-oca:ocpp:uid:1:569214
   * Maximum voltage supported by the electric vehicle
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evMaxVoltage: number
}
