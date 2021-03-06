import { ChargingStation } from './charging-station'
import { ChargingStationModel } from '@yellowgarbagebag/csms-lib'
import { ISendMessage } from '@yellowgarbagebag/ocpp-lib'

describe('Charging Station', () => {
  it('Dummy', () => {
    const cs = new ChargingStation(new ChargingStationModel('foo'), (null as unknown) as ISendMessage)
    expect(cs).toBeDefined()
  })
})
