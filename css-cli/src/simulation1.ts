import { SimulationBase } from './simulation-base'

class Simulation extends SimulationBase {
  constructor() {
    super('LS001', 'LS001', 'test')
  }

  protected simulate(): void {
    this.css.send(this.css.sendBootNotificationRequest())

    setTimeout(() => {
      this.css.send(this.css.sendStatusNotificationRequest())
    }, 100)

    setTimeout(() => {
      this.css.send(this.css.sendAuthorizationRequest_PinCode())
    }, 200)

    setTimeout(() => {
      this.css.send(this.css.sendAuthorizationRequest_Rfid())
    }, 300)

    setTimeout(() => {
      this.css.send(this.css.sendMeterValueRequest())
    }, 400)

    setTimeout(() => {
      this.css.send(this.css.sendHeartbeatRequest())
    }, 500)

    setTimeout(() => {
      this.css.send(this.css.sendNotifyEventRequest_LockFailure())
    }, 600)

    setTimeout(() => {
      this.css.disconnect()
    }, 2000)
  }
}

new Simulation()
