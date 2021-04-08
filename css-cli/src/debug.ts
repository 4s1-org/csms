import { sleep } from '@yellowgarbagebag/common-lib'
import { SimulationBase } from './simulation-base'

class Simulation extends SimulationBase {
  constructor() {
    super()
  }

  public async simulate(): Promise<void> {
    await this.connect()

    //await this.cs.sendBootNotificationRequest()
    await sleep(200)
    //await this.cs.sendAuthorizationRequest()
    await sleep(200)
    //await this.cs.sendMeterValueRequest()
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

new Simulation().simulate()
