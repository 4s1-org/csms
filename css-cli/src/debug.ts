import { sleep } from '@yellowgarbagebag/common-lib'
import { ChargingStation } from '@yellowgarbagebag/css-lib'
import { WsClient } from './ws-client'

class Simulation {
  private cs: ChargingStation
  private client: WsClient

  constructor() {
    this.client = new WsClient('LS001')
    this.cs = new ChargingStation('LS001', this.client)
  }

  public async simulate(): Promise<void> {
    await this.client.connect(this.cs, 'LS001', 'test')
    await this.cs.sendBootNotificationRequest()
    await sleep(200)
    await this.cs.sendAuthorizationRequest_PinCode()
    await sleep(200)
    await this.cs.sendAuthorizationRequest_Rfid()
    await sleep(200)
    await this.cs.sendMeterValueRequest()
    await sleep(200)
    await this.cs.sendHeartbeatRequest()
    await sleep(200)
    await this.cs.sendNotifyEventRequest_LockFailure()
    await sleep(200)
    await this.cs.sendHeartbeatRequest()
    await sleep(200)
    this.client.disconnect()
  }
}

async function main(): Promise<void> {
  const sim = new Simulation()
  await sim.simulate()
}

main().catch(console.error)
