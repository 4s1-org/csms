import { ChargingStationModel } from '../datastructs/charging-station.model'
import { RfidCardModel } from '../datastructs/rfid-card.model'
import { CsmsToUiCmdEnum } from './csms-to-ui-cmd.enum'

/**
 * Message which can be send from CSMS to the UI.
 */
export class CsmsToUiMsg {
  constructor(
    public readonly cmd: CsmsToUiCmdEnum,
    public readonly payload: ChargingStationModel | ChargingStationModel[] | RfidCardModel[],
  ) {
    // nothing to do
  }
}
