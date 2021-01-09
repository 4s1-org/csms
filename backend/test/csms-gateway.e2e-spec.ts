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

describe('CSMS Gateway', () => {
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

        socket.onmessage = (msg: WebSocket.MessageEvent): void => {
          const data = JSON.parse(msg.data as string)

          expect(data.length).toBe(3)
          expect(data[0]).toBe(OcppMessageTypeIdEnum.Result)
          expect(data[1]).toBe(messageId)
          expect(data[2]).toBeDefined()
          socket.close()
        }

        socket.onerror = (): void => {
          fail()
        }

        socket.onclose = (): void => {
          done()
        }
      })

      it('With OcppCallDto', (done) => {
        const socket = connectToSocket()
        const messageId = Math.random().toString()

        socket.onopen = (): void => {
          socket.send(
            new OcppCallDto(
              messageId,
              OcppMessageEnum.BootNotification,
              new BootNotificationRequestDto(
                new ChargingStationDto('SingleSocketCharger', 'VendorX'),
                BootReasonEnum.PowerUp,
              ),
            ).toString(),
          )
        }

        socket.onmessage = (msg: WebSocket.MessageEvent): void => {
          const data = JSON.parse(msg.data as string)

          expect(data.length).toBe(3)
          expect(data[0]).toBe(OcppMessageTypeIdEnum.Result)
          expect(data[1]).toBe(messageId)
          expect(data[2]).toBeDefined()
          socket.close()
        }

        socket.onerror = (): void => {
          fail()
        }

        socket.onclose = (): void => {
          done()
        }
      })

      describe('Invalid calls', () => {
        it('call is empty', (done) => {
          const socket = connectToSocket()

          socket.onopen = (): void => {
            socket.send(JSON.stringify(''))
          }

          socket.onmessage = (msg: WebSocket.MessageEvent): void => {
            const data = JSON.parse(msg.data as string)

            expect(data.length).toBe(5)
            expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
            expect(data[1]).toBe('')
            expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
            expect(data[3]).toBeDefined()
            expect(data[4]).toBeDefined()
            socket.close()
          }

          socket.onerror = (): void => {
            fail()
          }

          socket.onclose = (): void => {
            done()
          }
        })

        it('call is null', (done) => {
          const socket = connectToSocket()

          socket.onopen = (): void => {
            socket.send(null)
          }

          socket.onmessage = (msg: WebSocket.MessageEvent): void => {
            const data = JSON.parse(msg.data as string)

            expect(data.length).toBe(5)
            expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
            expect(data[1]).toBe('')
            expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
            expect(data[3]).toBeDefined()
            expect(data[4]).toBeDefined()
            socket.close()
          }

          socket.onerror = (): void => {
            fail()
          }

          socket.onclose = (): void => {
            done()
          }
        })

        it('call is undefined', (done) => {
          const socket = connectToSocket()

          socket.onopen = (): void => {
            socket.send(undefined)
          }

          socket.onmessage = (msg: WebSocket.MessageEvent): void => {
            const data = JSON.parse(msg.data as string)

            expect(data.length).toBe(5)
            expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
            expect(data[1]).toBe('')
            expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
            expect(data[3]).toBeDefined()
            expect(data[4]).toBeDefined()
            socket.close()
          }

          socket.onerror = (): void => {
            fail()
          }

          socket.onclose = (): void => {
            done()
          }
        })

        it('call is a number', (done) => {
          const socket = connectToSocket()

          socket.onopen = (): void => {
            socket.send(42)
          }

          socket.onmessage = (msg: WebSocket.MessageEvent): void => {
            const data = JSON.parse(msg.data as string)

            expect(data.length).toBe(5)
            expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
            expect(data[1]).toBe('')
            expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
            expect(data[3]).toBeDefined()
            expect(data[4]).toBeDefined()
            socket.close()
          }

          socket.onerror = (): void => {
            fail()
          }

          socket.onclose = (): void => {
            done()
          }
        })

        it('call is a string', (done) => {
          const socket = connectToSocket()

          socket.onopen = (): void => {
            socket.send('LoremIpsum')
          }

          socket.onmessage = (msg: WebSocket.MessageEvent): void => {
            const data = JSON.parse(msg.data as string)

            expect(data.length).toBe(5)
            expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
            expect(data[1]).toBe('')
            expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
            expect(data[3]).toBeDefined()
            expect(data[4]).toBeDefined()
            socket.close()
          }

          socket.onerror = (): void => {
            fail()
          }

          socket.onclose = (): void => {
            done()
          }
        })

        it('call is a string with 4 chars, like the correct array length', (done) => {
          const socket = connectToSocket()

          socket.onopen = (): void => {
            socket.send('ABCD')
          }

          socket.onmessage = (msg: WebSocket.MessageEvent): void => {
            const data = JSON.parse(msg.data as string)

            expect(data.length).toBe(5)
            expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
            expect(data[1]).toBe('')
            expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
            expect(data[3]).toBeDefined()
            expect(data[4]).toBeDefined()
            socket.close()
          }

          socket.onerror = (): void => {
            fail()
          }

          socket.onclose = (): void => {
            done()
          }
        })

        it('messageTypeId is not 2', (done) => {
          const socket = connectToSocket()
          const messageId = Math.random().toString()

          socket.onopen = (): void => {
            socket.send(
              JSON.stringify([
                OcppMessageTypeIdEnum.Result, // Es müsste ein Call sein
                messageId,
                OcppMessageEnum.BootNotification,
                new BootNotificationRequestDto(
                  new ChargingStationDto('SingleSocketCharger', 'VendorX'),
                  BootReasonEnum.PowerUp,
                ),
              ]),
            )
          }

          socket.onmessage = (msg: WebSocket.MessageEvent): void => {
            const data = JSON.parse(msg.data as string)

            expect(data.length).toBe(5)
            expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
            // ToDo: Sollte eigentlich möglich sein, die messageId zu bekommen
            //expect(data[1]).toBe(messageId)
            expect(data[2]).toBe(OcppErrorCode.RpcFrameworkError)
            expect(data[3]).toBeDefined()
            expect(data[4]).toBeDefined()
            socket.close()
          }

          socket.onerror = (): void => {
            fail()
          }

          socket.onclose = (): void => {
            done()
          }
        })
      })
    })

    describe('Format validation tests', () => {
      it('Call a not implemented action', (done) => {
        const socket = connectToSocket()
        const messageId = Math.random().toString()

        socket.onopen = (): void => {
          socket.send(
            JSON.stringify([
              OcppMessageTypeIdEnum.Call,
              messageId,
              OcppMessageEnum.UnpublishFirmware, // Noch nicht implementiert
              {},
            ]),
          )
        }

        socket.onmessage = (msg: WebSocket.MessageEvent): void => {
          const data = JSON.parse(msg.data as string)

          expect(data.length).toBe(5)
          expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
          expect(data[1]).toBe(messageId)
          expect(data[2]).toBe(OcppErrorCode.NotSupported)
          expect(data[3]).toBeDefined()
          expect(data[4]).toBeDefined()
          socket.close()
        }

        socket.onerror = (): void => {
          fail()
        }

        socket.onclose = (): void => {
          done()
        }
      })

      it('Call an invalid action', (done) => {
        const socket = connectToSocket()
        const messageId = Math.random().toString()

        socket.onopen = (): void => {
          socket.send(JSON.stringify([OcppMessageTypeIdEnum.Call, messageId, 'LoremIpsum', {}]))
        }

        socket.onmessage = (msg: WebSocket.MessageEvent): void => {
          const data = JSON.parse(msg.data as string)

          expect(data.length).toBe(5)
          expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
          expect(data[1]).toBe(messageId)
          expect(data[2]).toBe(OcppErrorCode.NotImplemented)
          expect(data[3]).toBeDefined()
          expect(data[4]).toBeDefined()
          socket.close()
        }

        socket.onerror = (): void => {
          fail()
        }

        socket.onclose = (): void => {
          done()
        }
      })

      it('action and paypload does not match', (done) => {
        const socket = connectToSocket()
        const messageId = Math.random().toString()

        socket.onopen = (): void => {
          socket.send(
            new OcppCallDto(
              messageId,
              OcppMessageEnum.BootNotification,
              // Payload passt nicht zur Message
              new AuthorizeRequestDto(new IdTokenDto('xxx', IdTokenEnum.eMAID)),
            ).toString(),
          )
        }

        socket.onmessage = (msg: WebSocket.MessageEvent): void => {
          const data = JSON.parse(msg.data as string)

          expect(data.length).toBe(5)
          expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
          expect(data[1]).toBe(messageId)
          expect(data[2]).toBe(OcppErrorCode.FormatViolation)
          expect(data[3]).toBeDefined()
          expect(data[4]).toBeDefined()
          socket.close()
        }

        socket.onerror = (): void => {
          fail()
        }

        socket.onclose = (): void => {
          done()
        }
      })
    })
  })
})
