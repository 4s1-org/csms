import {
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStationDto,
  OcppCallDto,
  OcppMessageEnum,
} from '@yellowgarbagebag/csms-shared'
import { v4 as uuid } from 'uuid'
import WebSocket from 'ws'
import { createLogger } from './logger'

const logger = createLogger()

function getId(): string {
  return uuid().replace(/-/g, '')
}

function sendBootNotification(socket: WebSocket): void {
  socket.send(
    new OcppCallDto(
      getId(),
      OcppMessageEnum.BootNotification,
      new BootNotificationRequestDto(new ChargingStationDto('SingleSocketCharger', 'VendorX'), BootReasonEnum.PowerUp),
    ).toString(),
  )
}

async function main(): Promise<void> {
  console.log('*** main() ***')

  const socket = new WebSocket('ws://localhost:3000/ocpp/2.0.1/LS001', ['ocpp2.0.1'])

  socket.onopen = (): void => {
    const socketId = 'foo' // request.headers['sec-websocket-key']
    logger.info('Connected: ' + socketId)

    sendBootNotification(socket)
  }

  socket.onmessage = (msg: WebSocket.MessageEvent): void => {
    const data = JSON.parse(msg.data as string)
    logger.info(data)
  }

  socket.onerror = (err: any): void => {
    logger.error('Error' + err)
  }
  socket.onclose = (): void => {
    logger.info('Close')
  }
}

main().catch(console.error)
