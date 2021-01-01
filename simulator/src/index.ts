import io from 'socket.io-client'
import {
  AuthorizeRequestDto,
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStationDto,
  IdTokenDto,
  IdTokenEnum,
  OcppCallDto,
  OcppMessageEnum,
  OcppMessageTypeIdEnum,
} from '@yellowgarbagebag/csms-shared'
import { v4 as uuid } from 'uuid'

function getId(): string {
  return uuid().replace(/-/g, '')
}

function resendMessage1(socket: SocketIOClient.Socket): void {
  if (socket && !socket.connected) {
    return
  }

  socket.emit('ocpp', 34, (response: any) => console.log('ocpp:', JSON.stringify(response)))
}

function resendMessage2(socket: SocketIOClient.Socket): void {
  if (socket && !socket.connected) {
    return
  }

  socket.emit(
    'ocpp',
    new OcppCallDto(
      OcppMessageTypeIdEnum.Call,
      getId(),
      OcppMessageEnum.BootNotification,
      new AuthorizeRequestDto(new IdTokenDto('foo', IdTokenEnum.KeyCode)),
    ).toMessage(),
    (response: any) => console.log('ocpp:', JSON.stringify(response)),
  )

  setTimeout(() => {
    resendMessage2(socket)
  }, 3000)
}

function resendMessage3(socket: SocketIOClient.Socket): void {
  if (socket && !socket.connected) {
    return
  }

  socket.emit(
    'ocpp',
    [
      OcppMessageTypeIdEnum.Call,
      getId(),
      'BootNotification',
      new BootNotificationRequestDto(new ChargingStationDto('SingleSocketCharger', 'VendorX'), BootReasonEnum.PowerUp),
    ],
    (response: any) => console.log('ocpp:', JSON.stringify(response)),
  )

  setTimeout(() => {
    resendMessage1(socket)
  }, 3000)
}

async function main(): Promise<void> {
  console.log('*** main() ***')
  const socket: SocketIOClient.Socket = io('http://172.22.21.12:3000/', {
    path: '/ocpp/2.0.1',
    transports: ['websocket'],
    forceNew: true,
  })

  socket.on('connect', () => {
    console.log('Connected: ' + socket.id)

    resendMessage1(socket)
  })

  socket.on('ocpp', (data: any) => {
    console.log('ocpp', data)
  })

  socket.on('exception', (data: any) => {
    console.log('exception', data)
  })

  socket.on('disconnect', () => {
    console.log('Disconnected')
  })
}

main().catch(console.error)
