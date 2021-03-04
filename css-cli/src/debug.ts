import { ChargingStation } from '@yellowgarbagebag/css-lib/dist/charging-station'
import { MessageInfoDto } from '@yellowgarbagebag/ocpp-lib'
import { sleep } from '../../css-lib/node_modules/@yellowgarbagebag/common-lib/dist'
import { WsClient } from './ws-client'

class ChargingStation2 extends ChargingStation {}

class Simulation {
  private client: WsClient
  private cs: ChargingStation2

  constructor() {
    this.client = new WsClient('LS001', 'LS001', 'test')
    this.cs = new ChargingStation2('LS001')
    console.log('constr')
  }

  public async simulate(): Promise<void> {
    console.log('simulate')
    await sleep(2000)
    const response = await this.client.send(this.cs.sendBootNotificationRequest())
    console.log(response)
  }
}

async function main(): Promise<void> {
  const sim = new Simulation()
  await sim.simulate()
}

main().catch(console.error)
