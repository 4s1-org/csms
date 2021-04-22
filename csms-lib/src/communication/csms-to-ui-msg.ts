import { ChargingStationModel } from '../datastructs/charging-station.model'
import { UserModel } from '../datastructs/user.model'
import { CsmsToUiCmdEnum } from './csms-to-ui-cmd.enum'

export class CsmsToUiMsg {
  constructor(public readonly cmd: CsmsToUiCmdEnum, public readonly payload: ChargingStationModel | ChargingStationModel[] | UserModel[]) {
    // nothing to do
  }
}
