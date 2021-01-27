import { OcppErrorResponseMessageDto, OcppRequestMessageDto, OcppResponseMessageDto } from '../callMessages'
import { arrayToMessage } from './methods'

describe('Methods', () => {
  describe('arrayToMessage', () => {
    it('Request Message', () => {
      // Arrange
      const data =
        '[2,"19223201","BootNotification",{"reason":"PowerUp","chargingStation":{"model":"SingleSocketCharger","vendorName":"VendorX"}}]'
      // Act
      const message = arrayToMessage(data)
      // Assert
      expect(message).toBeInstanceOf(OcppRequestMessageDto)
    })

    it('Response Message', () => {
      // Arrange
      const data = '[3,"19223201",{"currentTime": "2013-02-01T20:53:32.486Z","interval": 300,"status": "Accepted"}]'
      // Act
      const message = arrayToMessage(data)
      // Assert
      expect(message).toBeInstanceOf(OcppResponseMessageDto)
    })

    it('Error Response Message', () => {
      // Arrange
      const data = '[4,"162376037","NotSupported","SetDisplayMessageRequest not implemented",{}]'
      // Act
      const message = arrayToMessage(data)
      // Assert
      expect(message).toBeInstanceOf(OcppErrorResponseMessageDto)
    })
  })
})
