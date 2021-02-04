import 'reflect-metadata'
import { OcppErrorCallDto } from '../../calls/ocpp-error-message.dto'
import { OcppRequestCallDto } from '../../calls/ocpp-request-message.dto'
import { OcppResponseCallDto } from '../../calls/ocpp-response-message.dto'
import { CallConverter } from './ocpp-message-converter'

describe('Call Converter', () => {
  describe('arrayToMessage', () => {
    it('Request Call', () => {
      // Arrange
      const data =
        '[2,"19223201","BootNotification",{"reason":"PowerUp","chargingStation":{"model":"SingleSocketCharger","vendorName":"VendorX"}}]'
      // Act
      const message = CallConverter.instance.convert(data)
      // Assert
      expect(message).toBeInstanceOf(OcppRequestCallDto)
    })

    it('Response Call', () => {
      // Arrange
      const data = '[3,"19223201",{"currentTime": "2013-02-01T20:53:32.486Z","interval": 300,"status": "Accepted"}]'
      // Act
      const message = CallConverter.instance.convert(data)
      // Assert
      expect(message).toBeInstanceOf(OcppResponseCallDto)
    })

    it('Error Call', () => {
      // Arrange
      const data = '[4,"162376037","NotSupported","SetDisplayMessageRequest not implemented",{}]'
      // Act
      const message = CallConverter.instance.convert(data)
      // Assert
      expect(message).toBeInstanceOf(OcppErrorCallDto)
    })
  })
})
