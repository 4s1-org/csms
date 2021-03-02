import { ConnectorStatusEnum } from '@yellowgarbagebag/ocpp-lib'
import { SimulationBase } from './simulation-base'

const factor = 1.3
class Simulation extends SimulationBase {
  constructor() {
    super('LS002', 'LS002', 'test')
  }

  protected async simulate(): Promise<void> {
    this.css.send(this.css.sendBootNotificationRequest())

    setTimeout(() => {
      this.css.send(this.css.sendStatusNotificationRequest(ConnectorStatusEnum.Available, 1))
    }, 1000 * factor)

    setTimeout(() => {
      this.css.send(this.css.sendHeartbeatRequest())
    }, 1000 * factor)

    setTimeout(() => {
      this.css.send(this.css.sendHeartbeatRequest())
    }, 3000 * factor)

    setTimeout(() => {
      this.css.send(this.css.sendHeartbeatRequest())
    }, 5000 * factor)

    setTimeout(() => {
      this.css.send(this.css.sendHeartbeatRequest())
    }, 7000 * factor)

    setTimeout(() => {
      this.css.send(this.css.sendHeartbeatRequest())
    }, 9000 * factor)

    setTimeout(() => {
      this.css.disconnect()

      setTimeout(() => {
        this.simulate()
      }, 3000 * factor)
    }, 12000 * factor)
  }
}

new Simulation()
