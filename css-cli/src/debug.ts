import {
  CsmsError,
  GetVariablesRequestDto,
  OcppErrorCodeEnum,
  RequestBaseDto,
  ResponseBaseDto,
  SetVariablesRequestDto,
} from '@yellowgarbagebag/ocpp-lib'
import { ChargingStation } from './charging-station'
import { WsClient } from './ws-client'

class Simulation {
  private cs: ChargingStation
  private client: WsClient

  constructor() {
    this.cs = new ChargingStation('LS001')
    this.client = new WsClient((payload: RequestBaseDto): ResponseBaseDto => this.onMessage(payload))
  }

  public async simulate(): Promise<void> {
    await this.client.connect('LS001', 'LS001', 'test')
    const response = await this.client.send(this.cs.sendBootNotificationRequest())
    console.log(response)

    // this.client.disconnect()
  }

  private onMessage(payload: RequestBaseDto): ResponseBaseDto {
    if (payload instanceof GetVariablesRequestDto) {
      return this.cs.receiveGetVariablesRequest(payload)
    }

    // ToDo: Hier darf ich dem Server eine Fehlermeldung schicken
    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }
}

async function main(): Promise<void> {
  const sim = new Simulation()
  await sim.simulate()
}

main().catch(console.error)
