import 'reflect-metadata'

import { RpcCallerrorDto } from './calls/rpc-callerror.dto'
import { RpcCallDto } from './calls/rpc-call.dto'
import { RpcCallresultDto } from './calls/rpc-callresult.dto'
import { OcppRpcHandler } from './rpc-handler'

describe('Ocpp Call Handler', () => {
  describe('arrayToMessage', () => {
    it('Call', () => {
      // Arrange
      const data =
        '[2,"19223201","BootNotification",{"reason":"PowerUp","chargingStation":{"model":"SingleSocketCharger","vendorName":"VendorX"}}]'
      // Act
      const message = OcppRpcHandler.instance.validateAndConvert(data)
      // Assert
      expect(message).toBeInstanceOf(RpcCallDto)
    })

    it('Callresult', () => {
      // Arrange
      const data = '[3,"19223201",{"currentTime": "2013-02-01T20:53:32.486Z","interval": 300,"status": "Accepted"}]'
      // Act
      const message = OcppRpcHandler.instance.validateAndConvert(data)
      // Assert
      expect(message).toBeInstanceOf(RpcCallresultDto)
    })

    it('Callerror', () => {
      // Arrange
      const data = '[4,"162376037","NotSupported","SetDisplayMessageRequest not implemented",{}]'
      // Act
      const message = OcppRpcHandler.instance.validateAndConvert(data)
      // Assert
      expect(message).toBeInstanceOf(RpcCallerrorDto)
    })
  })
})
