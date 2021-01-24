import { ChargingStation } from './charging-station'

describe('CSMS Gateway', () => {
  it('Without OcppCallDto', () => {
    const cs = new ChargingStation('foo', 'foo', 'foo')
    expect(cs).toBeDefined()
  })
})
