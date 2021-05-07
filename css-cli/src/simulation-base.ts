import { ChargingStation } from '@yellowgarbagebag/css-lib'
import { IdTokenDto, IdTokenEnum } from '@yellowgarbagebag/ocpp-lib'
import { ProcessEnv } from './process-env'
import { WsClient } from './ws-client'

export abstract class SimulationBase {
  protected cs: ChargingStation
  protected client: WsClient
  private _seqNo = 0

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

  protected get seqNo(): number {
    this._seqNo++
    return this._seqNo
  }

  protected get idToken(): IdTokenDto {
    return new IdTokenDto('aaa', IdTokenEnum.ISO14443)
  }

  protected async connect(): Promise<void> {
    await this.client.connect(this.cs, this.https, this.server, this.username, this.password)
  }

  protected abstract simulate(): Promise<void>
}
