import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from './../src/app.module'
import io from 'socket.io-client'
import {
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStationDto,
  OcppCallResultDto,
  OcppMessageEnum,
  OcppMessageTypeIdEnum,
} from '@yellowgarbagebag/csms-shared'

describe('CSMS Gateway', () => {
  let app: INestApplication
  let connectToSocket: () => SocketIOClient.Socket

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

  it('should connect and disconnect', (done) => {
    const socket = connectToSocket()

    socket.on('connect', () => {
      socket.disconnect()
    })

    socket.on('disconnect', (reason: any) => {
      expect(reason).toBe('io client disconnect')
      done()
    })
    socket.on('error', done)
  })

  describe('Invalid Calls', () => {
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
          (response: any) => {
            expect(response).toBe(undefined)
            socket.disconnect()
          },
        )
      })

      socket.on('disconnect', (reason: any) => {
        expect(reason).toBe('transport close')
        done()
      })
      socket.on('error', done)
    })

    it('call is not an array', (done) => {
      const socket = connectToSocket()

      socket.on('connect', () => {
        socket.emit('ocpp', 'not an array', (response: any) => {
          expect(response).toBe(undefined)
          socket.disconnect()
        })
      })

      socket.on('disconnect', (reason: any) => {
        expect(reason).toBe('transport close')
        done()
      })
      socket.on('error', done)
    })
  })

  describe('BootNotification', () => {
    it('Send valid request', (done) => {
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
          (response: OcppCallResultDto) => {
            expect(response.messageId).toBe(messageId)
            expect(response.messageTypeId).toBe(3)
            //expect(response.payload?.status).toBe(RegistrationStatusEnum.Accepted)
            socket.disconnect()
          },
        )
      })

      socket.on('disconnect', (reason: any) => {
        expect(reason).toBe('io client disconnect')
        done()
      })
      socket.on('error', done)
    })
  })

  // it('should emit message on message', (done) => {
  //   const socket = connectToSocketIO()

  //   socket.on('connect', () => {
  //     socket.emit('message', 'Test')
  //   })

  //   socket.on('message', (message: any) => {
  //     expect(message).toBe(message)
  //     socket.disconnect()
  //   })

  //   socket.on('disconnect', (reason: any) => {
  //     expect(reason).toBe('transport close')
  //     done()
  //   })

  //   socket.on('error', done)
  // })
})
