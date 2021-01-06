import io from 'socket.io-client'
import {
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStationDto,
  OcppCallDto,
  OcppMessageEnum,
  OcppMessageTypeIdEnum,
} from '@yellowgarbagebag/csms-shared'
import { v4 as uuid } from 'uuid'

function getId(): string {
  return uuid().replace(/-/g, '')
}

function sendValidMessageWithCallDto(socket: SocketIOClient.Socket): void {
  socket.emit(
    'ocpp',
    new OcppCallDto(
      getId(),
      OcppMessageEnum.BootNotification,
      new BootNotificationRequestDto(new ChargingStationDto('SingleSocketCharger', 'VendorX'), BootReasonEnum.PowerUp),
    ).toMessage(),
    (response: any) => console.log('sendValidMessageWithCallDto:', JSON.stringify(response)),
  )
}

function spielwiese(socket: SocketIOClient.Socket): void {
  if (socket && !socket.connected) {
    return
  }

  socket.emit(
    'ocpp',
    [
      OcppMessageTypeIdEnum.Call,
      getId(),
      OcppMessageEnum.BootNotification,
      {
        chargingStation: {
          model: 'SingleSocketCharger',
          vendor: 'VendorX',
        },
        reason: BootReasonEnum.PowerUp,
      },
    ],
    (response: any) => console.log('sendValidMessageWithCallDto:', JSON.stringify(response)),
  )

  setTimeout(() => {
    spielwiese(socket)
  }, 3000)
}

async function main(): Promise<void> {
  console.log('*** main() ***')
  const socket: SocketIOClient.Socket = io('http://172.22.21.12:3000/', {
    path: '/ocpp/2.0.1/CS001',
    transports: ['websocket'],
    forceNew: true,
  })

  socket.on('connect', () => {
    console.log('Connected: ' + socket.id)

    sendValidMessageWithCallDto(socket)
    //spielwiese(socket)
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
