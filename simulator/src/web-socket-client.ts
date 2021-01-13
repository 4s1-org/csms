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

export class WebSocketClient {
  private logger = createLogger(this.name)

  public constructor(public readonly name: string) {
    // nothing to do
  }

  private getId(): string {
    return uuid().replace(/-/g, '')
  }

  private sendBootNotification(socket: WebSocket): void {
    socket.send(
      new OcppCallDto(
        this.getId(),
        OcppMessageEnum.BootNotification,
        new BootNotificationRequestDto(
          new ChargingStationDto('SingleSocketCharger', 'VendorX'),
          BootReasonEnum.PowerUp,
        ),
      ).toString(),
    )
  }

  public async run(): Promise<void> {
    const socket = new WebSocket(`ws://localhost:3000/ocpp/2.0.1/${this.name}`, ['ocpp2.0.1'])

    socket.onopen = (): void => {
      const socketId = 'foo' // request.headers['sec-websocket-key']
      this.logger.info('Connected: ' + socketId)

      this.sendBootNotification(socket)
    }

    socket.onmessage = (msg: WebSocket.MessageEvent): void => {
      const data = JSON.parse(msg.data as string)
      this.logger.info(data)
    }

    socket.onerror = (err: any): void => {
      this.logger.error('Error' + err)
    }
    socket.onclose = (): void => {
      this.logger.info('Close')
    }
  }
}
