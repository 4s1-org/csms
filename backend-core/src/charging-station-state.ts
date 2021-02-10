export class ChargingStationState {
  private _username = ''
  private _password = ''
  private _state = 'Offline'
  private _uniqueIdentifier: string

  public constructor(uniqueIdentifier: string) {
    this._uniqueIdentifier = uniqueIdentifier
  }

  public get username(): string {
    return this._username
  }

  public set username(value: string) {
    this._username = value
  }

  public get password(): string {
    return this._password
  }

  public set password(value: string) {
    this._password = value
  }

  public get state(): string {
    return this._state
  }

  public set state(value: string) {
    this._state = value
  }

  public get uniqueIdentifier(): string {
    return this._uniqueIdentifier
  }
}
