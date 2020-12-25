import { io } from 'socket.io-client'

async function main(): Promise<void> {
  console.log('*** main() ***')
  const socket = io('http://172.22.21.12:3000/', {
    path: '/ocpp',
    transports: ['websocket'],
    forceNew: true,
  })

  socket.on('connect', () => {
    console.log('Connected - ' + socket.id)

    socket.emit('events', { test: 'test' })
    socket.emit('identity', 0, (response: any) => console.log('Identity:', response))
    socket.emit(
      'ocpp',
      [
        2,
        'hallowelt',
        'BootNotification',
        {
          reason: 'PowerUp',
          chargingStation: {
            model: 'SingleSocketCharger',
            vendorName: 'VendorX',
          },
        },
      ],
      (response: any) => console.log('ocpp:', response),
    )
  })

  // socket.on('events', (data: any) => {
  //   console.log('event', data)
  // })

  socket.on('msgToClient', (data: any) => {
    console.log('event', data)
  })

  // socket.on('exception', (data: any) => {
  //   console.log('event', data)
  // })

  socket.on('disconnect', () => {
    console.log('Disconnected')
  })
}

main().catch(console.error)
