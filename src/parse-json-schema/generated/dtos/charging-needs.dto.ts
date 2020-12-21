// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import { ACChargingParametersDto } from './ac-charging-parameters.dto'
import { CustomDataDto } from './custom-data.dto'
import { DCChargingParametersDto } from './dc-charging-parameters.dto'
import { EnergyTransferModeEnum } from '../enums/energy-transfer-mode.enum'

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

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public acChargingParameters!: ACChargingParametersDto

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public dcChargingParameters!: DCChargingParametersDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EnergyTransferModeEnum)
  public requestedEnergyTransfer: EnergyTransferModeEnum

  /**
   * Charging_ Needs. Departure_ Time. Date_ Time
   * urn:x-oca:ocpp:uid:1:569223
   * Estimated departure time of the EV.
   */
  @ApiProperty()
  @IsOptional()
  // setFormat: date-time
  @IsString()
  public departureTime!: string
}
