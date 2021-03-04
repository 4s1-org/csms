// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { AcChargingParametersDto } from './ac-charging-parameters.dto'
import { CustomDataDto } from './custom-data.dto'
import { DcChargingParametersDto } from './dc-charging-parameters.dto'
import { EnergyTransferModeEnum } from '../enumerations/energy-transfer-mode.enum'

/**
 * Charging_ Needs
 * urn:x-oca:ocpp:uid:2:233249
 */
export class ChargingNeedsDto extends DatatypeBaseDto {
  private _className: "ChargingNeedsDto" = "ChargingNeedsDto"

  public constructor(
    requestedEnergyTransfer: EnergyTransferModeEnum,
  ) {
    super()
    this.requestedEnergyTransfer = requestedEnergyTransfer
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => AcChargingParametersDto)
  public acChargingParameters!: AcChargingParametersDto

  @Type(() => DcChargingParametersDto)
  public dcChargingParameters!: DcChargingParametersDto

  public requestedEnergyTransfer: EnergyTransferModeEnum

  /**
   * Charging_ Needs. Departure_ Time. Date_ Time
   * urn:x-oca:ocpp:uid:1:569223
   * Estimated departure time of the EV.
   */
  public departureTime!: string
}
