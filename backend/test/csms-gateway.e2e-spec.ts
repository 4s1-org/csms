import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from './../src/app.module'
import io from 'socket.io-client'
import {
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStationDto,
  OcppCallDto,
  OcppErrorCodes,
  OcppMessageEnum,
  OcppMessageTypeIdEnum,
} from '@yellowgarbagebag/csms-shared'

describe('CSMS Gateway', () => {
  let app: INestApplication
  let connectToSocket: () => SocketIOClient.Socket
  const gracefulDisconnectReason = 'io client disconnect'

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
    await app.listen(0)
    const httpServer = app.getHttpServer()
    connectToSocket = (): any =>
      io.connect(`http://127.0.0.1:${httpServer.address().port}`, {
        path: '/ocpp/2.0.1',
        transports: ['websocket'],
        forceNew: true,
      })
  })

  afterEach(async () => {
    await app.close()
  })

  describe('Valid calls', () => {
    it('Without OcppCallDto', (done) => {
      const socket = connectToSocket()
      const messageId = Math.random().toString()

      socket.on('connect', () => {
        socket.emit(
          'ocpp',
          [
            OcppMessageTypeIdEnum.Call,
            messageId,
            OcppMessageEnum.BootNotification,
            new BootNotificationRequestDto(
              new ChargingStationDto('SingleSocketCharger', 'VendorX'),
              BootReasonEnum.PowerUp,
            ),
          ],
          (data: any) => {
            expect(data.length).toBe(3)
            expect(data[0]).toBe(OcppMessageTypeIdEnum.Result)
            expect(data[1]).toBe(messageId)
            expect(data[2]).toBeDefined()
            socket.disconnect()
          },
        )
      })

      socket.on('ocpp', () => {
        fail()
      })

      socket.on('disconnect', (data: string) => {
        expect(data).toBe(gracefulDisconnectReason)
        done()
      })
    })

    it('With OcppCallDto', (done) => {
      const socket = connectToSocket()
      const messageId = Math.random().toString()

      socket.on('connect', () => {
        socket.emit(
          'ocpp',
          new OcppCallDto(
            messageId,
            OcppMessageEnum.BootNotification,
            new BootNotificationRequestDto(
              new ChargingStationDto('SingleSocketCharger', 'VendorX'),
              BootReasonEnum.PowerUp,
            ),
          ).toMessage(),
          (data: any) => {
            expect(data.length).toBe(3)
            expect(data[0]).toBe(OcppMessageTypeIdEnum.Result)
            expect(data[1]).toBe(messageId)
            expect(data[2]).toBeDefined()
            socket.disconnect()
          },
        )
      })

      socket.on('ocpp', () => {
        fail()
      })

      socket.on('disconnect', (data: string) => {
        expect(data).toBe(gracefulDisconnectReason)
        done()
      })
    })
  })

  describe('Invalid calls', () => {
    it('call is a number', (done) => {
      const socket = connectToSocket()

      socket.on('connect', () => {
        socket.emit('ocpp', 42, () => {
          fail()
        })
      })

      socket.on('ocpp', (data: any) => {
        expect(data.length).toBe(5)
        expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
        expect(data[1]).toBe('')
        expect(data[2]).toBe(OcppErrorCodes.FormatViolation)
        expect(data[3]).toBeDefined()
        expect(data[4]).toBeDefined()
        socket.disconnect()
      })

      socket.on('disconnect', (data: string) => {
        expect(data).toBe(gracefulDisconnectReason)
        done()
      })
    })

    it('call is a string', (done) => {
      const socket = connectToSocket()
      socket.on('connect', () => {
        socket.emit('ocpp', 'LoremIpsum', () => {
          fail()
        })
      })

      socket.on('ocpp', (data: any) => {
        expect(data.length).toBe(5)
        expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
        // ToDo: Wieder rein
        //expect(data[1]).toBe('')
        expect(data[2]).toBe(OcppErrorCodes.FormatViolation)
        expect(data[3]).toBeDefined()
        expect(data[4]).toBeDefined()
        socket.disconnect()
      })

      socket.on('disconnect', (data: string) => {
        expect(data).toBe(gracefulDisconnectReason)
        done()
      })
    })

    // ToDo: Wieder rein
    it.skip('call is a string with 4 chars, like the correct array length', (done) => {
      const socket = connectToSocket()

      socket.on('connect', () => {
        socket.emit('ocpp', 'ABCD', () => {
          fail()
        })
      })

      socket.on('ocpp', (data: any) => {
        expect(data.length).toBe(5)
        expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
        expect(data[1]).toBe('')
        expect(data[2]).toBe(OcppErrorCodes.FormatViolation)
        expect(data[3]).toBeDefined()
        expect(data[4]).toBeDefined()
        socket.disconnect()
      })

      socket.on('disconnect', (data: string) => {
        expect(data).toBe(gracefulDisconnectReason)
        done()
      })
    })

    it('messageTypeId is not 2', (done) => {
      const socket = connectToSocket()
      const messageId = Math.random().toString()

      socket.on('connect', () => {
        socket.emit(
          'ocpp',
          [
            1, // Es müsste eine 2 sein
            messageId,
            OcppMessageEnum.BootNotification,
            new BootNotificationRequestDto(
              new ChargingStationDto('SingleSocketCharger', 'VendorX'),
              BootReasonEnum.PowerUp,
            ),
          ],
          () => {
            fail()
          },
        )
      })

      socket.on('ocpp', (data: any) => {
        expect(data.length).toBe(5)
        expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
        expect(data[1]).toBe(messageId)
        // ToDo: Wieder rein
        //expect(data[2]).toBe(OcppErrorCodes.MessageTypeNotSupported)
        expect(data[3]).toBeDefined()
        expect(data[4]).toBeDefined()
        socket.disconnect()
      })

      socket.on('disconnect', (data: string) => {
        expect(data).toBe(gracefulDisconnectReason)
        done()
      })
    })
  })

  it('action and paypload does not match', (done) => {
    const socket = connectToSocket()
    const messageId = Math.random().toString()

    socket.on('connect', () => {
      socket.emit(
        'ocpp',
        new OcppCallDto(
          messageId,
          OcppMessageEnum.Authorize, // Das passt nicht
          new BootNotificationRequestDto(
            new ChargingStationDto('SingleSocketCharger', 'VendorX'),
            BootReasonEnum.PowerUp,
          ),
        ).toMessage(),
        () => {
          fail()
        },
      )
    })

    socket.on('ocpp', (data: any) => {
      expect(data.length).toBe(5)
      expect(data[0]).toBe(OcppMessageTypeIdEnum.Error)
      expect(data[1]).toBe(messageId)
      // ToDo: Wieder rein
      //expect(data[2]).toBe(OcppErrorCodes.MessageTypeNotSupported)
      expect(data[3]).toBeDefined()
      expect(data[4]).toBeDefined()
      socket.disconnect()
    })

    socket.on('disconnect', (data: string) => {
      expect(data).toBe(gracefulDisconnectReason)
      done()
    })
  })
})
