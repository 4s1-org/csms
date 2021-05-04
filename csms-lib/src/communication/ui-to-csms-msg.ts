import { ChargingStationModel } from '../datastructs'
import { UserModel } from '../datastructs/user.model'
import { UiToCsmsCmdEnum } from './ui-to-csms-cmd.enum'
import { UiToCsmsCsSubCmdEnum } from './ui-to-csms-cs-sub-cmd.enum'
import { UiToCsmsUserSubCmdEnum } from './ui-to-csms-user-sub-cmd.enum'

/**
 * Message which can be send from UI to the CSMS.
 */
export class UiToCsmsMsg {
  constructor(
    public readonly cmd: UiToCsmsCmdEnum,
    public readonly subCmd: UiToCsmsCsSubCmdEnum | UiToCsmsUserSubCmdEnum,
    public readonly payload: ChargingStationModel | UserModel,
  ) {}
}
