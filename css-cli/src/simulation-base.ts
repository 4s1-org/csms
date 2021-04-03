import { ChargingStation } from '@yellowgarbagebag/css-lib'
import { WsClient } from './ws-client'

export abstract class SimulationBase {
  protected cs: ChargingStation
  protected client: WsClient

  constructor(
    protected readonly server: string = process.env.SERVER || '',
    protected readonly uniqueIdentifier: string = process.env.UNIQUE_IDENTIFIER || '',
    protected readonly username: string = process.env.USERNAME || '',
    protected readonly password: string = process.env.PASSWORD || '',
  ) {
    this.client = new WsClient(this.uniqueIdentifier)
    this.cs = new ChargingStation(this.uniqueIdentifier, this.client)
  }

  protected async connect(): Promise<void> {
    await this.client.connect(this.cs, this.server, this.username, this.password)
  }

  protected abstract simulate(): Promise<void>
}
