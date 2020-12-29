import io from 'socket.io-client'
import {
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStationDto,
  OcppCallDto,
  OcppMessage,
} from '../../shared/dist'
import { v4 as uuid } from 'uuid'

function getId(): string {
  return uuid().replace(/-/g, "")
}

async function main(): Promise<void> {
  console.log('*** main() ***')
  const socket = io('http://172.22.21.12:3000/', {
    path: '/ocpp/2.0.1',
    transports: ['websocket'],
    forceNew: true,
  })

  socket.on('connect', () => {
    console.log('Connected: ' + socket.id)

    socket.emit('triggerEvents', 2)

    socket.emit(
      'ocpp',
      new OcppCallDto(
        2,
        getId(),
        OcppMessage.BootNotification,
        new BootNotificationRequestDto(
          new ChargingStationDto('SingleSocketCharger', 'VendorX'),
          BootReasonEnum.PowerUp,
        ),
      ).toMessage(),
      (response: any) => console.log('ocpp:', JSON.stringify(response)),
    )
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
