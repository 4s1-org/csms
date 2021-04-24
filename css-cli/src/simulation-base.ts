import { Logger } from '@yellowgarbagebag/common-lib'
import { ChargingStation } from '@yellowgarbagebag/css-lib'
import { ProcessEnv } from './process-env'
import { WsClient } from './ws-client'

export abstract class SimulationBase {
  protected cs: ChargingStation
  protected client: WsClient

  constructor(
    protected readonly https: boolean = ProcessEnv.HTTPS,
    protected readonly server: string = ProcessEnv.SERVER,
    protected readonly uniqueIdentifier: string = ProcessEnv.UNIQUE_IDENTIFIER,
    protected readonly username: string = ProcessEnv.USERNAME,
    protected readonly password: string = ProcessEnv.PASSWORD,
  ) {
    this.client = new WsClient(this.uniqueIdentifier)
    this.cs = new ChargingStation(this.uniqueIdentifier, this.client, ProcessEnv.LOG_LEVEL)
  }

  protected async connect(): Promise<void> {
    await this.client.connect(this.cs, this.https, this.server, this.username, this.password)
  }

  protected abstract simulate(): Promise<void>
}
