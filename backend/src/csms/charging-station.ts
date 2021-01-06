export class ChargingStation {
  public constructor(public readonly uniqueIdentifier: string, public socketId?: string | undefined) {}
}
