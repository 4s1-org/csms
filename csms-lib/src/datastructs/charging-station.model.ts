import { ColorStateEnum } from './color-state.enum'
import { EvseModel } from './evse.model'

export class ChargingStationModel {
  public lastContact = 0
  public lastAction = ''
  public evseList: EvseModel[] = []
  public state = ColorStateEnum.Unknown
  public uniqueIdentifier = ''
  public username = ''
  public passwordHash = ''
}
