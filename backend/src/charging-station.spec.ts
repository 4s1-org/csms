import { ChargingStation } from './charging-station'

describe('Charging Station', () => {
  it('Dummy', () => {
    const cs = new ChargingStation('foo', 'foo', 'foo')
    expect(cs).toBeDefined()
  })
})
