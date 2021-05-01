import { sleep } from '@yellowgarbagebag/common-lib'
import { HeartbeatRequestDto } from '@yellowgarbagebag/ocpp-lib'
import { SimulationBase } from './simulation-base'

class Simulation extends SimulationBase {
  constructor() {
    super()
  }

  public async simulate(): Promise<void> {
    await this.connect()

    //await this.cs.sendBootNotification()
    await sleep(200)
    //await this.cs.sendAuthorization()
    await sleep(200)
    //await this.cs.sendMeterValue()
    await sleep(200)
    await this.cs.sendHeartbeat(new HeartbeatRequestDto())
    await sleep(200)
    this.client.disconnect()
  }
}

new Simulation().simulate()
