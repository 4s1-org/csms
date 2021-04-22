import { ChargingStationModel } from '../charging-station-model'
import { UserModel } from '../user-model'
import { CsmsToUiCmdEnum } from './csms-to-ui-cmd.enum'

export class CsmsToUiMsg {
  constructor(public readonly cmd: CsmsToUiCmdEnum, public readonly data: ChargingStationModel | UserModel) {}
}
