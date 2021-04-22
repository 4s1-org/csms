import { ColorStateEnum } from './color-state.enum'
import { EvseModel } from './evse.model'

export class ChargingStationModel {
  public lastContact = 0
  public lastAction = ''
  public evseList: EvseModel[] = []
  public state = ColorStateEnum.Unknown

  public constructor(public readonly uniqueIdentifier: string, public readonly username: string, public readonly passwordHash: string) {
    // nothing to do
  }
}
