import io from 'socket.io-client'

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
      (response: any) => console.log('ocpp:', JSON.stringify(response)),
    )
  })

  socket.on('ocpp', (data: any) => {
    console.log('ocpp', data)
  })

  socket.on('eventResponse', (data: any) => {
    console.log('eventResponse', data)
  })

  socket.on('msgToClient', (data: any) => {
    console.log('msgToClient', data)
  })

  socket.on('exception', (data: any) => {
    console.log('exception', data)
  })

  socket.on('disconnect', () => {
    console.log('Disconnected')
  })
}

main().catch(console.error)
