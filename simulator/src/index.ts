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

function sendNoArray(socket: SocketIOClient.Socket): void {
  if (socket && !socket.connected) {
    return
  }

  socket.emit('ocpp', 34, (response: any) => console.log('sendNoArray:', JSON.stringify(response)))

  setTimeout(() => {
    sendNoArray(socket)
  }, 3000)
}

function sendMessageAndDataNotWorkTogether(socket: SocketIOClient.Socket): void {
  if (socket && !socket.connected) {
    return
  }

  socket.emit(
    'ocpp',
    [
      OcppMessageTypeIdEnum.Call,
      getId(),
      OcppMessageEnum.BootNotification,
      new AuthorizeRequestDto(new IdTokenDto('foo', IdTokenEnum.KeyCode)),
    ],
    (response: any) => console.log('sendMessageAndDataNotWorkTogether:', JSON.stringify(response)),
  )

  setTimeout(() => {
    sendMessageAndDataNotWorkTogether(socket)
  }, 3000)
}

function sendToLongId(socket: SocketIOClient.Socket): void {
  if (socket && !socket.connected) {
    return
  }

  socket.emit(
    'ocpp',
    [
      OcppMessageTypeIdEnum.Call,
      getId() + 'xxx',
      OcppMessageEnum.BootNotification,
      new BootNotificationRequestDto(new ChargingStationDto('SingleSocketCharger', 'VendorX'), BootReasonEnum.PowerUp),
    ],
    (response: any) => console.log('sendToLongId:', JSON.stringify(response)),
  )

  setTimeout(() => {
    sendToLongId(socket)
  }, 3000)
}

function sendValidMessageWithoutCallDto(socket: SocketIOClient.Socket): void {
  if (socket && !socket.connected) {
    return
  }

  socket.emit(
    'ocpp',
    [
      OcppMessageTypeIdEnum.Call,
      getId(),
      OcppMessageEnum.BootNotification,
      new BootNotificationRequestDto(new ChargingStationDto('SingleSocketCharger', 'VendorX'), BootReasonEnum.PowerUp),
    ],
    (response: any) => console.log('sendValidMessageWithoutCallDto:', JSON.stringify(response)),
  )

  setTimeout(() => {
    sendValidMessageWithoutCallDto(socket)
  }, 3000)
}

function sendValidMessageWithCallDto(socket: SocketIOClient.Socket): void {
  if (socket && !socket.connected) {
    return
  }

  socket.emit(
    'ocpp',
    new OcppCallDto(
      getId(),
      OcppMessageEnum.BootNotification,
      new BootNotificationRequestDto(new ChargingStationDto('SingleSocketCharger', 'VendorX'), BootReasonEnum.PowerUp),
    ).toMessage(),
    (response: any) => console.log('sendValidMessageWithCallDto:', JSON.stringify(response)),
  )

  setTimeout(() => {
    sendValidMessageWithCallDto(socket)
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

    sendNoArray(socket)
    //sendToLongId(socket)
    //sendMessageAndDataNotWorkTogether(socket)
    //sendValidMessageWithoutCallDto(socket)
    //sendValidMessageWithoutCallDto(socket)
    //sendValidMessageWithCallDto(socket)
  })

  socket.on('ocpp', (data: any) => {
    console.log('ocpp-response:', JSON.stringify(data))
  })

  socket.on('exception', (data: any) => {
    console.log('exception', data)
  })

  socket.on('disconnect', () => {
    console.log('Disconnected')
  })
}

main().catch(console.error)
