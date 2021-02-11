import { ChargingStation } from './charging-station'
import { ChargingStationState } from '@yellowgarbagebag/csms-lib'

describe('Charging Station', () => {
  it('Dummy', () => {
    const cs = new ChargingStation(new ChargingStationState('foo'))
    expect(cs).toBeDefined()
  })
})
