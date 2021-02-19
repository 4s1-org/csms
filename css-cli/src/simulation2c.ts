import { ChargingStation, WebSocketClient } from '@yellowgarbagebag/css-lib'
import WebSocket from 'ws'

const factor = 1.77
const cs = new ChargingStation('LS004', 'LS004', 'test')

function connect(): void {
  const socket = new WebSocket(`wss://localhost:3000/ocpp/${cs.uniqueIdentifier}`, ['ocpp2.0.1'], {
    headers: {
      authorization: `Basic ${Buffer.from(`${cs.username}:${cs.password}`).toString('base64')}`,
    },
  })

  const sendCallback = (msg: any): boolean => {
    if (socket && socket.OPEN) {
      socket.send(msg)
      return true
    }
    return false
  }
  const client = new WebSocketClient(cs, sendCallback)

  socket.onopen = (): void => {
    cs.connect()

    setTimeout(() => {
      client.send(cs.sendBootNotificationRequest())
    }, 1000 * factor)

    setTimeout(() => {
      client.send(cs.sendHeartbeatRequest())
    }, 1000 * factor)

    setTimeout(() => {
      client.send(cs.sendHeartbeatRequest())
    }, 3000 * factor)

    setTimeout(() => {
      client.send(cs.sendHeartbeatRequest())
    }, 5000 * factor)

    setTimeout(() => {
      client.send(cs.sendHeartbeatRequest())
    }, 7000 * factor)

    setTimeout(() => {
      client.send(cs.sendHeartbeatRequest())
    }, 9000 * factor)

    setTimeout(() => {
      socket.close()
    }, 10000 * factor)
  }

  socket.onmessage = (msg: WebSocket.MessageEvent): void => {
    client.onMessage(msg.data)
  }

  socket.onerror = (err: WebSocket.ErrorEvent): void => {
    client.onError(err.message)
  }

  socket.onclose = (): void => {
    client.onClose()
    setTimeout(() => {
      connect()
    }, 3000 * factor)
  }
}

connect()
