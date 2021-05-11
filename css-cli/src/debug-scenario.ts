import { sleep } from '@yellowgarbagebag/common-lib'
import { BootNotificationRequestDto, BootReasonEnum, ChargingStationDto, HeartbeatRequestDto } from '@yellowgarbagebag/ocpp-lib'
import { SimulationBase } from './simulation-base'

/**
 * Simulation for debug purpose.
 */
class DebugScenario extends SimulationBase {
  constructor() {
    super()
  }

  public async simulate(): Promise<void> {
    await this.connect()
    await sleep(100)

    await this.cs.sendBootNotification(
      new BootNotificationRequestDto(new ChargingStationDto('Simulator1', 'CSS-CLI'), BootReasonEnum.PowerUp),
    )
    await sleep(200)

    await this.cs.sendHeartbeat(new HeartbeatRequestDto())
    await sleep(200)

    this.client.disconnect()
  }
}

new DebugScenario().simulate()
