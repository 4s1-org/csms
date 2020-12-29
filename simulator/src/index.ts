import { io } from 'socket.io-client'
import { BootNotificationRequestDto, BootReasonEnum, ChargingStationDto } from '../../shared/dist'

async function main(): Promise<void> {
  console.log('*** main() ***')
  const socket = io('http://172.22.21.12:3000/', {
    path: '/ocpp/2.0.1',
    transports: ['websocket'],
    forceNew: true,
  })

  socket.on('connect', () => {
    console.log('Connected - ' + socket.id)

    socket.emit(
      'ocpp',
      [
        2,
        'hallowelt',
        'BootNotification',
        new BootNotificationRequestDto(new ChargingStationDto('SingleSocketCharger', 'VendorX'), BootReasonEnum.PowerUp),
      ],
      (response: any) => console.log('ocpp:', response),
    )
  })

  socket.on('error', (err: any) => {
    console.error('error', err)
  })

  socket.on('disconnect', (msg: any) => {
    console.log('Disconnected', msg)
  })
}

main().catch(console.error)
