import {
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStationDto,
  Logger,
  OcppMessageEnum,
  toClass,
  OcppRequestMessageDto,
  OcppResponseMessageDto,
  HeartbeatRequestDto,
  RequestBaseDto,
  StatusNotificationRequestDto,
  ConnectorStatusEnum,
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

  private send(socket: WebSocket, action: OcppMessageEnum, payload: RequestBaseDto): void {
    const msg = new OcppRequestMessageDto(this.getId(), action, payload).toString()
    this.logger.debug('Send', msg)
    socket.send(msg)
  }

  private sendBootNotification(socket: WebSocket): void {
    const csDto = new ChargingStationDto('SingleSocketCharger', 'VendorX')
    const payload = new BootNotificationRequestDto(csDto, BootReasonEnum.PowerUp)
    this.send(socket, OcppMessageEnum.BootNotification, payload)
  }

  private sendHeartbeat(socket: WebSocket): void {
    const payload = new HeartbeatRequestDto()
    this.send(socket, OcppMessageEnum.Heartbeat, payload)

    setTimeout(() => {
      if (socket.OPEN) {
        this.sendHeartbeat(socket)
      }
    }, 60000)
  }

  private sendStatusNotification(socket: WebSocket): void {
    const payload = new StatusNotificationRequestDto(new Date().toISOString(), ConnectorStatusEnum.Available, 1, 1)
    this.send(socket, OcppMessageEnum.StatusNotification, payload)
  }

  public async run(): Promise<void> {
    const socket = new WebSocket(`ws://localhost:3000/ocpp/2.0.1/${this.name}`, ['ocpp2.0.1'])

    socket.onopen = (): void => {
      const socketId = 'foo' // request.headers['sec-websocket-key']
      this.logger.info('Connected: ' + socketId)

      this.sendBootNotification(socket)

      setTimeout(() => {
        if (socket.OPEN) {
          this.sendStatusNotification(socket)
        }
      }, 1000)

      setTimeout(() => {
        if (socket.OPEN) {
          this.sendHeartbeat(socket)
        }
      }, 2000)
    }

    socket.onmessage = (msg: WebSocket.MessageEvent): void => {
      this.logger.debug('Received', toClass(OcppResponseMessageDto, msg.data))

      const data = JSON.parse(msg.data as string)
    }

    socket.onerror = (err: WebSocket.ErrorEvent): void => {
      this.logger.error(err.message)
    }

    socket.onclose = (): void => {
      this.logger.info('Connection closed')
      setTimeout(() => this.run(), 3000)
    }
  }
}
