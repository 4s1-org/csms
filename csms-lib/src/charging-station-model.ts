import { Expose } from 'class-transformer'

export enum ChargingStationGroupFlag {
  ServerOnly = 'serverOnly',
  UiOnly = 'uiOnly',
}

export enum ChargingStationState {
  Offline,
  Connecting,
  Online,
}

export class ChargingStationModel {
  @Expose({ name: '_username' })
  public username = ''

  /**
   * Only at Server
   */
  @Expose({ name: '_passwordHash', groups: [ChargingStationGroupFlag.ServerOnly] })
  public passwordHash = ''

  /**
   * Only at UI
   */
  @Expose({ name: '_state', groups: [ChargingStationGroupFlag.UiOnly] })
  public state = ChargingStationState.Offline

  @Expose({ name: '_uniqueIdentifier' })
  public readonly uniqueIdentifier: string

  @Expose({ name: '_lastContact' })
  public lastContact = 0

  /**
   * Only at UI
   */
  @Expose({ name: '_lastCommand', groups: [ChargingStationGroupFlag.UiOnly] })
  public lastCommand = ''

  /**
   * Only at UI
   */
  @Expose({ name: '_evse', groups: [ChargingStationGroupFlag.UiOnly] })
  public evse: { evseId: number; user: string }[] = []

  public constructor(uniqueIdentifier: string) {
    this.uniqueIdentifier = uniqueIdentifier
  }
}
