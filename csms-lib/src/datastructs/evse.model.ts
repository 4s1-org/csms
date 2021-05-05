import { ColorStateEnum } from './color-state.enum'
import { RfidCardModel } from './rfid-card.model'

/**
 * Model for an EVSE
 */
export class EvseModel {
  public wattHours = 0
  public state = ColorStateEnum.Unknown
  public currentUser: RfidCardModel | undefined
  public id = 0
}
