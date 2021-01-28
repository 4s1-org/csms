import 'reflect-metadata'
import { OcppErrorCallDto } from '../../calls/ocpp-error-call.dto'
import { OcppRequestCallDto } from '../../calls/ocpp-request-call.dto'
import { OcppResponseCallDto } from '../../calls/ocpp-response-call.dto'
import { CallConverter } from './call-converter'

describe('Call Converter', () => {
  describe('arrayToMessage', () => {
    it('Request Call', () => {
      // Arrange
      const data =
        '[2,"19223201","BootNotification",{"reason":"PowerUp","chargingStation":{"model":"SingleSocketCharger","vendorName":"VendorX"}}]'
      // Act
      const message = CallConverter.convert(data)
      // Assert
      expect(message).toBeInstanceOf(OcppRequestCallDto)
    })

    it('Response Call', () => {
      // Arrange
      const data = '[3,"19223201",{"currentTime": "2013-02-01T20:53:32.486Z","interval": 300,"status": "Accepted"}]'
      // Act
      const message = CallConverter.convert(data)
      // Assert
      expect(message).toBeInstanceOf(OcppResponseCallDto)
    })

    it('Error Call', () => {
      // Arrange
      const data = '[4,"162376037","NotSupported","SetDisplayMessageRequest not implemented",{}]'
      // Act
      const message = CallConverter.convert(data)
      // Assert
      expect(message).toBeInstanceOf(OcppErrorCallDto)
    })
  })
})
