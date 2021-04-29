import { sleep } from '@yellowgarbagebag/common-lib'
import { BootNotificationRequestDto, BootReasonEnum, ChargingStationDto } from '@yellowgarbagebag/ocpp-lib'
import { SimulationBase } from './simulation-base'

class Simulation extends SimulationBase {
  constructor() {
    super()
  }

  public async simulate(): Promise<void> {
    await this.connect()

    // await this.cs.sendBootNotificationRequest(
    //   new BootNotificationRequestDto(new ChargingStationDto('Simulator1', 'CSS-CLI'), BootReasonEnum.PowerUp),
    // )

    try {
      await this.cs.sendHeartbeatRequest()
    } catch (err) {}

    await sleep(200)
    await sleep(200)
    this.client.disconnect()
  }
}

new Simulation().simulate()
