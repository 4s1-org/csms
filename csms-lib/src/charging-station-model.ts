import { Expose } from 'class-transformer'

export enum ChargingStationState {
  Offline,
  Schroedinger,
  Online,
}

export class ChargingStationModel {
  @Expose({ name: 'username' })
  private _username = ''

  @Expose({ name: 'passwordHash', groups: ['password'] })
  private _passwordHash = ''

  @Expose({ name: 'state' })
  private _state = ChargingStationState.Offline

  @Expose({ name: 'uniqueIdentifier' })
  private _uniqueIdentifier: string

  @Expose({ name: 'lastContact' })
  private _lastContact = 0

  public constructor(uniqueIdentifier: string) {
    this._uniqueIdentifier = uniqueIdentifier
  }

  public get username(): string {
    return this._username
  }

  public set username(value: string) {
    this._username = value
  }

  public get passwordHash(): string {
    return this._passwordHash
  }

  public set passwordHash(value: string) {
    this._passwordHash = value
  }

  public get state(): ChargingStationState {
    return this._state
  }

  public set state(value: ChargingStationState) {
    this._state = value
  }

  public get uniqueIdentifier(): string {
    return this._uniqueIdentifier
  }

  public set lastContact(value: number) {
    this._lastContact = value
  }

  public get lastContact(): number {
    return this._lastContact
  }
}
