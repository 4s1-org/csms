// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsDateString, IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { AcChargingParametersDto } from './ac-charging-parameters.dto'
import { CustomDataDto } from './custom-data.dto'
import { DcChargingParametersDto } from './dc-charging-parameters.dto'
import { EnergyTransferModeEnum } from '../enumerations/energy-transfer-mode.enum'

/**
 * Charging_ Needs
 * urn:x-oca:ocpp:uid:2:233249
 */
export class ChargingNeedsDto {
  public constructor(
    requestedEnergyTransfer: EnergyTransferModeEnum,
  ) {
    this.requestedEnergyTransfer = requestedEnergyTransfer
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @ValidateNested()
  public acChargingParameters!: AcChargingParametersDto

  @IsOptional()
  @ValidateNested()
  public dcChargingParameters!: DcChargingParametersDto

  @IsNotEmpty()
  @IsEnum(EnergyTransferModeEnum)
  public requestedEnergyTransfer: EnergyTransferModeEnum

  /**
   * Charging_ Needs. Departure_ Time. Date_ Time
   * urn:x-oca:ocpp:uid:1:569223
   * Estimated departure time of the EV.
   */
  @IsOptional()
  @IsDateString()
  public departureTime!: string
}
