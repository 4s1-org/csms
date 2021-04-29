import { sleep } from '@yellowgarbagebag/common-lib'
import { SimulationBase } from './simulation-base'

class Simulation extends SimulationBase {
  constructor() {
    super()
  }

  public async simulate(): Promise<void> {
    await this.connect()

    try {
      await this.cs.sendHeartbeatRequest()
    } catch (err) {}

    await sleep(200)
    await sleep(200)
    this.client.disconnect()
  }
}

new Simulation().simulate()
