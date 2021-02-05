import 'reflect-metadata'
import { OcppErrorMessageDto } from '../../calls/ocpp-error-message.dto'
import { OcppRequestMessageDto } from '../../calls/ocpp-request-message.dto'
import { OcppResponseMessageDto } from '../../calls/ocpp-response-message.dto'
import { OcppMessageHandler } from './ocpp-message-handler'

describe('Ocpp Message Handler', () => {
  describe('arrayToMessage', () => {
    it('Request Call', () => {
      // Arrange
      const data =
        '[2,"19223201","BootNotification",{"reason":"PowerUp","chargingStation":{"model":"SingleSocketCharger","vendorName":"VendorX"}}]'
      // Act
      const message = OcppMessageHandler.instance.convert(data)
      // Assert
      expect(message).toBeInstanceOf(OcppRequestMessageDto)
    })

    it('Response Call', () => {
      // Arrange
      const data = '[3,"19223201",{"currentTime": "2013-02-01T20:53:32.486Z","interval": 300,"status": "Accepted"}]'
      // Act
      const message = OcppMessageHandler.instance.convert(data)
      // Assert
      expect(message).toBeInstanceOf(OcppResponseMessageDto)
    })

    it('Error Call', () => {
      // Arrange
      const data = '[4,"162376037","NotSupported","SetDisplayMessageRequest not implemented",{}]'
      // Act
      const message = OcppMessageHandler.instance.convert(data)
      // Assert
      expect(message).toBeInstanceOf(OcppErrorMessageDto)
    })
  })
})
