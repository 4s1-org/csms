import { ChargingStationOld } from './charging-station'
import { ChargingStationModel } from '@yellowgarbagebag/csms-lib'

describe('Charging Station', () => {
  it('Dummy', () => {
    const cs = new ChargingStationOld(new ChargingStationModel('foo'))
    expect(cs).toBeDefined()
  })
})
