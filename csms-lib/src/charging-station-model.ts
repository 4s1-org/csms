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
  @Expose({ name: '_id', groups: [ChargingStationGroupFlag.UiOnly] })
  @Transform(({ value }) => value || 0, { toClassOnly: true })
  public id = 0

  @Expose({ name: '_wattHours', groups: [ChargingStationGroupFlag.UiOnly] })
  @Transform(({ value }) => value || 0, { toClassOnly: true })
  public wattHours = 0

  /**
   * Only at UI
   */
  @Expose({ name: '_state', groups: [ChargingStationGroupFlag.UiOnly] })
  @Transform(({ value }) => value || ColorState.Unknown, { toClassOnly: true })
  public state = ColorState.Unknown

  /**
   * Only at UI
   */
  @Expose({ name: '_currentUser', groups: [ChargingStationGroupFlag.UiOnly] })
  @Transform(({ value }) => value || '', { toClassOnly: true })
  public currentUser = ''

  public constructor(id: number, wattHours: number, state: ColorState, currentUser: string) {
    this.id = id
    this.wattHours = wattHours
    this.state = state
    this.currentUser = currentUser
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

  /**
   * Only at UI
   */
  @Expose({ name: '_lastAction', groups: [ChargingStationGroupFlag.UiOnly] })
  @Transform(({ value }) => value || '', { toClassOnly: true })
  public lastAction = ''

  /**
   * Only at UI
   */
  @Expose({ name: '_evse', groups: [ChargingStationGroupFlag.UiOnly] })
  @Transform(({ value }) => value || [], { toClassOnly: true })
  @Type(() => Evse)
  public evseList: Evse[] = []

  public constructor(uniqueIdentifier: string) {
    this.uniqueIdentifier = uniqueIdentifier
  }
}
