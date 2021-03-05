import { ChargingStation } from './charging-station'
import { WsClient } from './ws-client'

export abstract class SimulationBase {
  protected cs: ChargingStation
  protected client: WsClient

  constructor(
    protected readonly uniqueIdentifier: string,
    protected readonly username: string,
    protected readonly password: string,
  ) {
    this.client = new WsClient()
    this.cs = new ChargingStation(this.uniqueIdentifier, this.client)
  }

  protected async connect(): Promise<void> {
    await this.client.connect(this.cs, 'LS001', 'LS001', 'test')
  }

  protected abstract simulate(): Promise<void>
}
