import { SimulationBase } from './simulation-base'

const factor = 1.77
class Simulation extends SimulationBase {
  constructor() {
    super('LS004', 'LS004', 'test')
  }

  protected simulate(): void {
    this.css.send(this.css.sendBootNotificationRequest())

    setTimeout(() => {
      //this.css.send(this.css.sendStatusNotificationRequest())
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
