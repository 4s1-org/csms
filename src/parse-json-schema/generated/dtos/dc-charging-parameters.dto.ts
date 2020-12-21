// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * DC_ Charging_ Parameters
 * urn:x-oca:ocpp:uid:2:233251
 * EV DC charging parameters
 */
export class DCChargingParametersDto {
  public constructor(
    evMaxCurrent: number,
    evMaxVoltage: number,
  ) {
    this.evMaxCurrent = evMaxCurrent
    this.evMaxVoltage = evMaxVoltage
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * DC_ Charging_ Parameters. EV_ Max. Current
   * urn:x-oca:ocpp:uid:1:569215
   * Maximum current (amps) supported by the electric vehicle. Includes cable capacity.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evMaxCurrent: number

  /**
   * DC_ Charging_ Parameters. EV_ Max. Voltage
   * urn:x-oca:ocpp:uid:1:569216
   * Maximum voltage supported by the electric vehicle
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evMaxVoltage: number

  /**
   * DC_ Charging_ Parameters. Energy_ Amount. Energy_ Amount
   * urn:x-oca:ocpp:uid:1:569217
   * Amount of energy requested (in Wh). This inludes energy required for preconditioning.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public energyAmount!: number

  /**
   * DC_ Charging_ Parameters. EV_ Max. Power
   * urn:x-oca:ocpp:uid:1:569218
   * Maximum power (in W) supported by the electric vehicle. Required for DC charging.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evMaxPower!: number

  /**
   * DC_ Charging_ Parameters. State_ Of_ Charge. Numeric
   * urn:x-oca:ocpp:uid:1:569219
   * Energy available in the battery (in percent of the battery capacity)
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public stateOfCharge!: number

  /**
   * DC_ Charging_ Parameters. EV_ Energy_ Capacity. Numeric
   * urn:x-oca:ocpp:uid:1:569220
   * Capacity of the electric vehicle battery (in Wh)
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evEnergyCapacity!: number

  /**
   * DC_ Charging_ Parameters. Full_ SOC. Percentage
   * urn:x-oca:ocpp:uid:1:569221
   * Percentage of SoC at which the EV considers the battery fully charged. (possible values: 0 - 100)
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public fullSoC!: number

  /**
   * DC_ Charging_ Parameters. Bulk_ SOC. Percentage
   * urn:x-oca:ocpp:uid:1:569222
   * Percentage of SoC at which the EV considers a fast charging process to end. (possible values: 0 - 100)
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public bulkSoC!: number
}
