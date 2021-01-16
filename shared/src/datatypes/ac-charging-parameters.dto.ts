// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * AC_ Charging_ Parameters
 * urn:x-oca:ocpp:uid:2:233250
 * EV AC charging parameters.
 */
export class AcChargingParametersDto extends DatatypeBaseDto {
  public constructor(
    energyAmount: number,
    evMinCurrent: number,
    evMaxCurrent: number,
    evMaxVoltage: number,
  ) {
    super()
    this.energyAmount = energyAmount
    this.evMinCurrent = evMinCurrent
    this.evMaxCurrent = evMaxCurrent
    this.evMaxVoltage = evMaxVoltage
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * AC_ Charging_ Parameters. Energy_ Amount. Energy_ Amount
   * urn:x-oca:ocpp:uid:1:569211
   * Amount of energy requested (in Wh). This includes energy required for preconditioning.
   */
  @IsNotEmpty()
  @IsInt()
  public energyAmount: number

  /**
   * AC_ Charging_ Parameters. EV_ Min. Current
   * urn:x-oca:ocpp:uid:1:569212
   * Minimum current (amps) supported by the electric vehicle (per phase).
   */
  @IsNotEmpty()
  @IsInt()
  public evMinCurrent: number

  /**
   * AC_ Charging_ Parameters. EV_ Max. Current
   * urn:x-oca:ocpp:uid:1:569213
   * Maximum current (amps) supported by the electric vehicle (per phase). Includes cable capacity.
   */
  @IsNotEmpty()
  @IsInt()
  public evMaxCurrent: number

  /**
   * AC_ Charging_ Parameters. EV_ Max. Voltage
   * urn:x-oca:ocpp:uid:1:569214
   * Maximum voltage supported by the electric vehicle
   */
  @IsNotEmpty()
  @IsInt()
  public evMaxVoltage: number
}
