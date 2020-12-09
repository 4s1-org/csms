// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ACChargingParametersDto } from './ac-charging-parameters.dto'
import { DCChargingParametersDto } from './dc-charging-parameters.dto'
import { EnergyTransferModeEnum } from '../enums/energy-transfer-mode.enum'

/**
 * Charging_ Needs
urn:x-oca:ocpp:uid:2:233249
 */
export class ChargingNeedsDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public acChargingParameters: ACChargingParametersDto

  @IsOptional()
  @ApiProperty()
  public dcChargingParameters: DCChargingParametersDto

  @ApiProperty()
  public requestedEnergyTransfer: EnergyTransferModeEnum

  /**
   * Charging_ Needs. Departure_ Time. Date_ Time
urn:x-oca:ocpp:uid:1:569223
Estimated departure time of the EV.
   */
  @IsOptional()
  @ApiProperty()
  public departureTime: string
}
