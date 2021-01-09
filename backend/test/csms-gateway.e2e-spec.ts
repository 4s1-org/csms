import { WebSocketServer } from './../src/web-socket-server'
import WebSocket from 'ws'
import {
  AuthorizeRequestDto,
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStationDto,
  IdTokenDto,
  IdTokenEnum,
  OcppCallDto,
  OcppErrorCode,
  OcppMessageEnum,
  OcppMessageTypeIdEnum,
} from '@yellowgarbagebag/csms-shared'

function BootNotification(ws: WebSocket): void {
  const BN = JSON.stringify([
    2,
    '123456789',
    'BootNotification',
    {
      chargingStation: {
        serialNumber: 'avt.001.13.1',
        model: 'AVT-Express',
        modem: {
          iccid: 'MMCC IINN NNNN NNNN NN C x',
          imsi: '520031234567890',
        },
        vendorName: 'AVT-Company',
        firmwareVersion: '0.9.87',
      },
      reason: 'PowerUp',
    },
  ])

  ws.send(BN)
}

describe('CSMS Gateway', () => {
  const gracefulDisconnectReason = 'io client disconnect'
  const connectToSocket = (): WebSocket => {
    return new WebSocket('ws://localhost:3000/ocpp/2.0.1/LS001', ['ocpp2.0.1'])
  }

  beforeEach(async () => {
    // Start server
    WebSocketServer.run(3000)
  })

  afterEach(() => {
    WebSocketServer.stop()
  })

  it('connect', (done) => {
    const socket = connectToSocket()
    socket.onopen = (authorizationData: any): void => {
      BootNotification(socket)
    }

    socket.onmessage = (data: any): void => {
      console.log(data)
      expect(data).toBeDefined()
      socket.close()
    }

    socket.onerror = (): void => {
      fail()
    }

    socket.onclose = (): void => {
      done()
    }
  })

  describe('RPC Framework tests', () => {
    describe('Valid calls', () => {
      it('Without OcppCallDto', (done) => {
        const socket = connectToSocket()
        const messageId = Math.random().toString()

        socket.onopen = (): void => {
          socket.send(
            JSON.stringify([
              OcppMessageTypeIdEnum.Call,
              messageId,
              OcppMessageEnum.BootNotification,
              new BootNotificationRequestDto(
                new ChargingStationDto('SingleSocketCharger', 'VendorX'),
                BootReasonEnum.PowerUp,
              ),
            ]),
          )
        }

        socket.onmessage = (data: any): void => {
          //var ddata = (JSON.parse(msg.data));
          console.log(data)
          expect(data.length).toBe(3)
          expect(data[0]).toBe(OcppMessageTypeIdEnum.Result)
          expect(data[1]).toBe(messageId)
          expect(data[2]).toBeDefined()
          socket.close()
          done()
        }

        socket.onerror = (): void => {
          fail()
        }

        socket.onclose = (): void => {
          done()
        }
      })

      //     it('With OcppCallDto', (done) => {
      //       const socket = connectToSocket()
      //       const messageId = Math.random().toString()

      //       socket.on('connect', () => {
      //         socket.emit(
      //           'ocpp',
      //           new OcppCallDto(
      //             messageId,
      //             OcppMessageEnum.BootNotification,
      //             new BootNotificationRequestDto(
      //               new ChargingStationDto('SingleSocketCharger', 'VendorX'),
      //               BootReasonEnum.PowerUp,
      //             ),
      //           ).toMessage(),
      //           (data: any) => {
      //             expect(data.length).toBe(3)
      //             expect(data[0]).toBe(OcppMessageTypeIdEnum.Result)
      //             expect(data[1]).toBe(messageId)
      //             expect(data[2]).toBeDefined()
      //             socket.disconnect()
      //           },
      //         )
      //       })

      //       socket.on('ocpp', () => {
      //         fail()
      //       })

      //       socket.on('disconnect', (data: string) => {
      //         expect(data).toBe(gracefulDisconnectReason)
      //         done()
      //       })
      //     })
      //   })

      //   describe('Invalid calls', () => {
      //     it('call is empty', (done) => {
      //       const socket = connectToSocket()

      //       socket.on('connect', () => {
      //         socket.emit('ocpp', (data: any) => {
      //           expect(data.length).toBe(5)
      //           expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
      //           expect(data[1]).toBe('')
      //           expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
      //           expect(data[3]).toBeDefined()
      //           expect(data[4]).toBeDefined()
      //           socket.disconnect()
      //         })
      //       })

      //       socket.on('ocpp', () => {
      //         fail()
      //       })

      //       socket.on('disconnect', (data: string) => {
      //         expect(data).toBe(gracefulDisconnectReason)
      //         done()
      //       })
      //     })

      //     it('call is null', (done) => {
      //       const socket = connectToSocket()

      //       socket.on('connect', () => {
      //         socket.emit('ocpp', null, (data: any) => {
      //           expect(data.length).toBe(5)
      //           expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
      //           expect(data[1]).toBe('')
      //           expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
      //           expect(data[3]).toBeDefined()
      //           expect(data[4]).toBeDefined()
      //           socket.disconnect()
      //         })
      //       })

      //       socket.on('ocpp', () => {
      //         fail()
      //       })

      //       socket.on('disconnect', (data: string) => {
      //         expect(data).toBe(gracefulDisconnectReason)
      //         done()
      //       })
      //     })

      //     it('call is undefined', (done) => {
      //       const socket = connectToSocket()

      //       socket.on('connect', () => {
      //         socket.emit('ocpp', undefined, (data: any) => {
      //           expect(data.length).toBe(5)
      //           expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
      //           expect(data[1]).toBe('')
      //           expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
      //           expect(data[3]).toBeDefined()
      //           expect(data[4]).toBeDefined()
      //           socket.disconnect()
      //         })
      //       })

      //       socket.on('ocpp', () => {
      //         fail()
      //       })

      //       socket.on('disconnect', (data: string) => {
      //         expect(data).toBe(gracefulDisconnectReason)
      //         done()
      //       })
      //     })

      //     it('call is a number', (done) => {
      //       const socket = connectToSocket()

      //       socket.on('connect', () => {
      //         socket.emit('ocpp', 42, (data: any) => {
      //           expect(data.length).toBe(5)
      //           expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
      //           expect(data[1]).toBe('')
      //           expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
      //           expect(data[3]).toBeDefined()
      //           expect(data[4]).toBeDefined()
      //           socket.disconnect()
      //         })
      //       })

      //       socket.on('ocpp', () => {
      //         fail()
      //       })

      //       socket.on('disconnect', (data: string) => {
      //         expect(data).toBe(gracefulDisconnectReason)
      //         done()
      //       })
      //     })

      //     it('call is a string', (done) => {
      //       const socket = connectToSocket()
      //       socket.on('connect', () => {
      //         socket.emit('ocpp', 'LoremIpsum', (data: any) => {
      //           expect(data.length).toBe(5)
      //           expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
      //           expect(data[1]).toBe('')
      //           expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
      //           expect(data[3]).toBeDefined()
      //           expect(data[4]).toBeDefined()
      //           socket.disconnect()
      //         })
      //       })

      //       socket.on('ocpp', () => {
      //         fail()
      //       })

      //       socket.on('disconnect', (data: string) => {
      //         expect(data).toBe(gracefulDisconnectReason)
      //         done()
      //       })
      //     })

      //     it('call is a string with 4 chars, like the correct array length', (done) => {
      //       const socket = connectToSocket()

      //       socket.on('connect', () => {
      //         socket.emit('ocpp', 'ABCD', (data: any) => {
      //           expect(data.length).toBe(5)
      //           expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
      //           expect(data[1]).toBe('')
      //           expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
      //           expect(data[3]).toBeDefined()
      //           expect(data[4]).toBeDefined()
      //           socket.disconnect()
      //         })
      //       })

      //       socket.on('ocpp', () => {
      //         fail()
      //       })

      //       socket.on('disconnect', (data: string) => {
      //         expect(data).toBe(gracefulDisconnectReason)
      //         done()
      //       })
      //     })

      //     it('messageTypeId is not 2', (done) => {
      //       const socket = connectToSocket()
      //       const messageId = Math.random().toString()

      //       socket.on('connect', () => {
      //         socket.emit(
      //           'ocpp',
      //           [
      //             OcppMessageTypeIdEnum.Result, // Es müsste ein Call sein
      //             messageId,
      //             OcppMessageEnum.BootNotification,
      //             new BootNotificationRequestDto(
      //               new ChargingStationDto('SingleSocketCharger', 'VendorX'),
      //               BootReasonEnum.PowerUp,
      //             ),
      //           ],
      //           (data: any) => {
      //             expect(data.length).toBe(5)
      //             expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
      //             expect(data[1]).toBe(messageId)
      //             expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
      //             expect(data[3]).toBeDefined()
      //             expect(data[4]).toBeDefined()
      //             socket.disconnect()
      //           },
      //         )
      //       })

      //       socket.on('ocpp', () => {
      //         fail()
      //       })

      //       socket.on('disconnect', (data: string) => {
      //         expect(data).toBe(gracefulDisconnectReason)
      //         done()
      //       })
      //     })
      //   })
      // })

      // describe('Format validation tests', () => {
      //   it('Call a not implemented action', (done) => {
      //     const socket = connectToSocket()
      //     const messageId = Math.random().toString()

      //     socket.on('connect', () => {
      //       socket.emit(
      //         'ocpp',
      //         [
      //           OcppMessageTypeIdEnum.Call,
      //           messageId,
      //           OcppMessageEnum.UnpublishFirmware, // Noch nicht implementiert
      //           {},
      //         ],
      //         (data: any) => {
      //           expect(data.length).toBe(5)
      //           expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
      //           expect(data[1]).toBe(messageId)
      //           expect(data[2]).toBe(OcppErrorCode.NotSupported)
      //           expect(data[3]).toBeDefined()
      //           expect(data[4]).toBeDefined()
      //           socket.disconnect()
      //         },
      //       )
      //     })

      //     socket.on('ocpp', () => {
      //       fail()
      //     })

      //     socket.on('disconnect', (data: string) => {
      //       expect(data).toBe(gracefulDisconnectReason)
      //       done()
      //     })
      //   })

      //   it('Call an invalid action', (done) => {
      //     const socket = connectToSocket()
      //     const messageId = Math.random().toString()

      //     socket.on('connect', () => {
      //       socket.emit('ocpp', [OcppMessageTypeIdEnum.Call, messageId, 'LoremIpsum', {}], (data: any) => {
      //         expect(data.length).toBe(5)
      //         expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
      //         expect(data[1]).toBe(messageId)
      //         expect(data[2]).toBe(OcppErrorCode.NotImplemented)
      //         expect(data[3]).toBeDefined()
      //         expect(data[4]).toBeDefined()
      //         socket.disconnect()
      //       })
      //     })

      //     socket.on('ocpp', () => {
      //       fail()
      //     })

      //     socket.on('disconnect', (data: string) => {
      //       expect(data).toBe(gracefulDisconnectReason)
      //       done()
      //     })
      //   })

      //   it('action and paypload does not match', (done) => {
      //     const socket = connectToSocket()
      //     const messageId = Math.random().toString()

      //     socket.on('connect', () => {
      //       socket.emit(
      //         'ocpp',
      //         new OcppCallDto(
      //           messageId,
      //           OcppMessageEnum.BootNotification,
      //           // Payload passt nicht zur Message
      //           new AuthorizeRequestDto(new IdTokenDto('xxx', IdTokenEnum.eMAID)),
      //         ).toMessage(),
      //         (data: any) => {
      //           expect(data.length).toBe(5)
      //           expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
      //           expect(data[1]).toBe(messageId)
      //           expect(data[2]).toBe(OcppErrorCode.FormatViolation)
      //           expect(data[3]).toBeDefined()
      //           expect(data[4]).toBeDefined()
      //           socket.disconnect()
      //         },
      //       )
      //     })

      //     socket.on('ocpp', () => {
      //       fail()
      //     })

      //     socket.on('disconnect', (data: string) => {
      //       expect(data).toBe(gracefulDisconnectReason)
      //       done()
      //     })
    })
  })
})
