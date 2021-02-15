import { ChargingStation, WebSocketClient } from '@yellowgarbagebag/css-lib'
import WebSocket from 'ws'

const cs = new ChargingStation('LS001', 'LS001', 'test')
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

  client.send(cs.sendBootNotificationRequest())

  setTimeout(() => {
    client.send(cs.sendStatusNotificationRequest())
  }, 100)

  setTimeout(() => {
    client.send(cs.sendAuthorizationRequest_PinCode())
  }, 200)

  setTimeout(() => {
    client.send(cs.sendAuthorizationRequest_Rfid())
  }, 300)

  setTimeout(() => {
    client.send(cs.sendMeterValueRequest())
  }, 400)

  setTimeout(() => {
    client.send(cs.sendHeartbeatRequest())
  }, 500)

  setTimeout(() => {
    client.send(cs.sendNotifyEventRequest_LockFailure())
  }, 600)

  setTimeout(() => {
    socket.close()
  }, 2000)
}

socket.onmessage = (msg: WebSocket.MessageEvent): void => {
  client.onMessage(msg.data)
}

socket.onerror = (err: WebSocket.ErrorEvent): void => {
  client.onError(err.message)
}

socket.onclose = (): void => {
  client.onClose()
}
