import { ColorStateEnum } from './color-state.enum'
import { EvseModel } from './evse.model'

export class ChargingStationModel {
  public lastContact = 0
  public lastAction = ''
  public evseList: EvseModel[] = []
  public state = ColorStateEnum.Unknown
  public username = ''
  public passwordHash = ''

  public constructor(public readonly uniqueIdentifier: string) {
    // nothing to do
  }
}
