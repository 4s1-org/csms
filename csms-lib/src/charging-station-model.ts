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

  @Expose({ name: '_passwordHash', groups: [ChargingStationGroupFlag.ServerOnly] })
  /**
   * Only at Server
   */
  public passwordHash = ''

  @Expose({ name: '_state', groups: [ChargingStationGroupFlag.UiOnly] })
  /**
   * Only at UI
   */
  public state = ChargingStationState.Offline

  @Expose({ name: '_uniqueIdentifier' })
  public readonly uniqueIdentifier: string

  @Expose({ name: '_lastContact' })
  public lastContact = 0

  @Expose({ name: '_lastCommand', groups: [ChargingStationGroupFlag.UiOnly] })
  /**
   * Only at UI
   */
  public lastCommand = ''

  @Expose({ name: '_evse', groups: [ChargingStationGroupFlag.UiOnly] })
  /**
   * Only at UI
   */
  public evse: { evseId: number; user: string }[] = []

  public constructor(uniqueIdentifier: string) {
    this.uniqueIdentifier = uniqueIdentifier
  }
}
