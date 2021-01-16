import {
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStationDto,
  Logger,
  OcppCallDto,
  OcppMessageTypeIdEnum,
  OcppMessageEnum,
} from '@yellowgarbagebag/csms-shared'
import { v4 as uuid } from 'uuid'
import WebSocket from 'ws'

export class WebSocketClient {
  private logger = new Logger(this.name)

  public constructor(public readonly name: string) {
    // nothing to do
  }

  private getId(): string {
    return uuid().replace(/-/g, '')
  }

  private sendBootNotification(socket: WebSocket): void {
    const msg = new OcppCallDto(
      this.getId(),
      OcppMessageEnum.BootNotification,
      new BootNotificationRequestDto(new ChargingStationDto('SingleSocketCharger', 'VendorX'), BootReasonEnum.PowerUp),
    ).toString()

    this.logger.debug('Send', msg)
    socket.send(msg)
  }

  private sendSpielwiese(socket: WebSocket): void {
    const msg = JSON.stringify([
      OcppMessageTypeIdEnum.Call,
      this.getId(),
      OcppMessageEnum.BootNotification,
      {
        chargingStation: {
          model: 'SingleSocketCharger',
          vendorName: 'VendorX',
        },
        reason: 'PowerUp',
        //foobar: true,
      },
    ])

    this.logger.debug('Send', msg)
    socket.send(msg)
  }

  public async run(): Promise<void> {
    const socket = new WebSocket(`ws://localhost:3000/ocpp/2.0.1/${this.name}`, ['ocpp2.0.1'])

    socket.onopen = (): void => {
      const socketId = 'foo' // request.headers['sec-websocket-key']
      this.logger.info('Connected: ' + socketId)

      //this.sendBootNotification(socket)
      this.sendSpielwiese(socket)
    }

    socket.onmessage = (msg: WebSocket.MessageEvent): void => {
      this.logger.debug('Received', msg.data)

      const data = JSON.parse(msg.data as string)
    }

    socket.onerror = (err: any): void => {
      this.logger.error('Error' + err)
    }

    socket.onclose = (): void => {
      this.logger.info('Close')
      setTimeout(() => this.run(), 3000)
    }
  }
}
