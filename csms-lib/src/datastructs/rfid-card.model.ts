/**
 *  Model for an rfid card.
 */
export class RfidCardModel {
  public id = ''
  public rfid = ''
  public description = ''
  public enabled = false
  public chargingItems: ChargingItem[] = []
}

export class ChargingItem {
  public start = ''
  public end = ''
  public wattHours = 0
}
