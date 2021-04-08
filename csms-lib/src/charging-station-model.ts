import { Expose, Transform, Type } from 'class-transformer'

export enum ChargingStationGroupFlag {
  ServerOnly = 'serverOnly',
  UiOnly = 'uiOnly',
}

export enum ColorState {
  Unknown,
  Red,
  Yellow,
  Green,
  Blue,
  Black,
}

export class Evse {
  public constructor(public readonly evseId: number, public status: ColorState, public currentUser: string) {
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
  @Transform(({ value }) => value || ColorState.Unknown, { toClassOnly: true })
  public state = ColorState.Unknown

  @Expose({ name: '_uniqueIdentifier' })
  @Transform(({ value }) => value || '', { toClassOnly: true })
  public readonly uniqueIdentifier: string = ''

  @Expose({ name: '_lastContact' })
  @Transform(({ value }) => value || 0, { toClassOnly: true })
  public lastContact = 0

  @Expose({ name: '_wattHours' })
  @Transform(({ value }) => value || 0, { toClassOnly: true })
  public wattHours = 0

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
