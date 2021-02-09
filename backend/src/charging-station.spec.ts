import { ChargingStation } from './charging-station'
import { ChargingStationState } from './charging-station-state'

describe('Charging Station', () => {
  it('Dummy', () => {
    const cs = new ChargingStation(new ChargingStationState('foo'))
    expect(cs).toBeDefined()
  })
})
