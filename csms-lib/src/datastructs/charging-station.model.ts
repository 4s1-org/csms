import { ColorStateEnum } from './color-state.enum'
import { EvseModel } from './evse.model'

/**
 * Model for ChargingStation
 */
export class ChargingStationModel {
  public id = ''
  public lastContact = 0
  public lastAction = ''
  public evseList: EvseModel[] = []
  public state = ColorStateEnum.Unknown
  public uniqueIdentifier = ''
  public username = ''
  public passwordHash = ''
  public enabled = false
  public failedLogins = 0
}
