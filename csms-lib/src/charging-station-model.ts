import { Expose, Transform, Type } from 'class-transformer'

export enum ChargingStationGroupFlag {
  ServerOnly = 'serverOnly',
  UiOnly = 'uiOnly',
}

export enum ChargingStationState {
  Offline,
  Connecting,
  Online,
}

export class Evse {
  public constructor(public readonly evseId: number, public readonly user: string) {
    // nothing to do
  }
}

export class ChargingStationModel {
  @Expose({ name: '_username' })
  @Transform(({ value }) => value || '', { toClassOnly: true })
  public username = ''

  /**
   * Only at Server
   */
  @Expose({ name: '_passwordHash', groups: [ChargingStationGroupFlag.ServerOnly] })
  @Transform(({ value }) => value || '', { toClassOnly: true })
  public passwordHash = ''

  /**
   * Only at UI
   */
  @Expose({ name: '_state', groups: [ChargingStationGroupFlag.UiOnly] })
  @Transform(({ value }) => value || ChargingStationState.Offline, { toClassOnly: true })
  public state = ChargingStationState.Offline

  @Expose({ name: '_uniqueIdentifier' })
  @Transform(({ value }) => value || '', { toClassOnly: true })
  public readonly uniqueIdentifier: string = ''

  @Expose({ name: '_lastContact' })
  @Transform(({ value }) => value || 0, { toClassOnly: true })
  public lastContact = 0

  /**
   * Only at UI
   */
  @Expose({ name: '_lastCommand', groups: [ChargingStationGroupFlag.UiOnly] })
  @Transform(({ value }) => value || '', { toClassOnly: true })
  public lastCommand = ''

  /**
   * Only at UI
   */
  @Expose({ name: '_evse', groups: [ChargingStationGroupFlag.UiOnly] })
  @Transform(({ value }) => value || [], { toClassOnly: true })
  @Type(() => Evse)
  public evse: Evse[] = []

  public constructor(uniqueIdentifier: string) {
    this.uniqueIdentifier = uniqueIdentifier
  }
}
