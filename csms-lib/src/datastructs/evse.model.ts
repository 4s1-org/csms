import { ColorStateEnum } from './color-state.enum'
import { ChipcardModel } from './chipcard.model'

/**
 * Model for an EVSE
 */
export class EvseModel {
  public wattHours = 0
  public state = ColorStateEnum.Unknown
  public currentUser: ChipcardModel | undefined
  public id = 0
}
