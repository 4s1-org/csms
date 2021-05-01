import { sleep } from '@yellowgarbagebag/common-lib'
import { HeartbeatRequestDto } from '@yellowgarbagebag/ocpp-lib'
import { SimulationBase } from './simulation-base'

class Simulation extends SimulationBase {
  constructor() {
    super()
  }

  public async simulate(): Promise<void> {
    await this.connect()

    // await this.cs.sendBootNotification(
    //   new BootNotificationRequestDto(new ChargingStationDto('Simulator1', 'CSS-CLI'), BootReasonEnum.PowerUp),
    // )

    try {
      await this.cs.sendHeartbeat(new HeartbeatRequestDto())
    } catch (err) {}

    await sleep(200)
    await sleep(200)
    this.client.disconnect()
  }
}

new Simulation().simulate()
