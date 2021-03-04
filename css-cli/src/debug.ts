import { sleep } from '@yellowgarbagebag/common-lib'
import { ChargingStation } from './charging-station'
import { WsClient } from './ws-client'

class Simulation {
  private cs: ChargingStation
  private client: WsClient

  constructor() {
    this.client = new WsClient()
    this.cs = new ChargingStation('LS001', this.client)
  }

  public async simulate(): Promise<void> {
    await this.client.connect(this.cs, 'LS001', 'LS001', 'test')

    this.cs.receiveBootNotificationResponse(await this.cs.sendBootNotificationRequest())
    this.cs.receiveBootNotificationResponse(await this.cs.sendBootNotificationRequest())

    await sleep(2000)
    this.client.disconnect()
  }
}

async function main(): Promise<void> {
  const sim = new Simulation()
  await sim.simulate()
}

main().catch(console.error)
