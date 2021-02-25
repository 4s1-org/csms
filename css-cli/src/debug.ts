import { SimulationBase } from './simulation-base'

class Simulation extends SimulationBase {
  constructor() {
    super('LS001', 'LS001', 'test')
  }

  protected simulate(): void {
    this.css.send(this.css.sendAuthorizationRequest_Rfid())
  }
}

new Simulation()
