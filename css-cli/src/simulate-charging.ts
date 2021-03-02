import { sleep } from '@yellowgarbagebag/common-lib'
import { ConnectorStatusEnum } from '@yellowgarbagebag/ocpp-lib'
import { SimulationBase } from './simulation-base'

class SimulateCharging extends SimulationBase {
  constructor() {
    super('LS001', 'LS001', 'test')
  }

  protected async simulate(): Promise<void> {
    // Sende BootNotification Request
    this.css.send(this.css.sendBootNotificationRequest())

    await sleep(2000)

    // Sende StatusNotification Request
    // - Dies ist zwar optional, aber sinnvoll.
    // - 3 Ladepunkte sind vorhanden, aber nicht einsatzbereit
    this.css.send(this.css.sendStatusNotificationRequest(ConnectorStatusEnum.Unavailable, 1))
    await sleep(200)
    this.css.send(this.css.sendStatusNotificationRequest(ConnectorStatusEnum.Unavailable, 2))
    await sleep(200)
    this.css.send(this.css.sendStatusNotificationRequest(ConnectorStatusEnum.Unavailable, 3))

    await sleep(2000)

    // Sende StatusNotification Request
    // - 2 Ladepunkte nun einsatzbereit
    // - 1 Ladepunkt ist defekt
    this.css.send(this.css.sendStatusNotificationRequest(ConnectorStatusEnum.Available, 1))
    await sleep(200)
    this.css.send(this.css.sendStatusNotificationRequest(ConnectorStatusEnum.Available, 2))
    await sleep(200)
    this.css.send(this.css.sendStatusNotificationRequest(ConnectorStatusEnum.Faulted, 3))

    // Sende regelmässig den Heartbeat
    this.css.send(this.css.sendHeartbeatRequest())
  }
}

new SimulateCharging()
