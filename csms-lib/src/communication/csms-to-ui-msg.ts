import { ChargingStationModel } from '../datastructs/charging-station.model'
import { ChipcardModel } from '../datastructs/chipcard.model'
import { CsmsToUiCmdEnum } from './csms-to-ui-cmd.enum'

/**
 * Message which can be send from CSMS to the UI.
 */
export class CsmsToUiMsg {
  constructor(
    public readonly cmd: CsmsToUiCmdEnum,
    public readonly payload: ChargingStationModel | ChargingStationModel[] | ChipcardModel[],
  ) {
    // nothing to do
  }
}
