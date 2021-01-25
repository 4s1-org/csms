import {
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStationDto,
  Logger,
  OcppMessageEnum,
  OcppRequestMessageDto,
  OcppResponseMessageDto,
  HeartbeatRequestDto,
  RequestBaseDto,
  StatusNotificationRequestDto,
  ConnectorStatusEnum,
  AuthorizeRequestDto,
  IdTokenDto,
  IdTokenEnum,
  toClass,
  ResponseBaseDto,
  CsmsError,
  OcppErrorCodeEnum,
  BootNotificationResponseDto,
  AuthorizeResponseDto,
  HeartbeatResponseDto,
  StatusNotificationResponseDto,
  AuthorizationStatusEnum,
} from '@yellowgarbagebag/csms-shared'
import { v4 as uuid } from 'uuid'
import WebSocket from 'ws'

export class WebSocketClient {
  private logger = new Logger(this.name)

  private sendList: OcppRequestMessageDto[] = []

  public constructor(public readonly name: string) {
    // nothing to do
  }

  private send(socket: WebSocket, action: OcppMessageEnum, payload: RequestBaseDto): void {
    const msg = new OcppRequestMessageDto(uuid(), action, payload)
    const msgStr = msg.toString()
    this.logger.info(`-OUT- ${action}`)
    this.logger.debug('Send', msgStr)
    socket.send(msgStr)
    this.sendList.push(msg)
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

  private sendAuthorization(socket: WebSocket): void {
    const idTocken = new IdTokenDto('1234', IdTokenEnum.KeyCode)
    const payload = new AuthorizeRequestDto(idTocken)
    this.send(socket, OcppMessageEnum.Authorize, payload)
  }

  private sendStatusNotification(socket: WebSocket): void {
    const payload = new StatusNotificationRequestDto(new Date().toISOString(), ConnectorStatusEnum.Available, 1, 1)
    this.send(socket, OcppMessageEnum.StatusNotification, payload)
  }

  public async run(): Promise<void> {
    const socket = new WebSocket(`wss://localhost:3000/ocpp/${this.name}`, ['ocpp2.0.1'], {
      headers: {
        authorization: `Basic ${Buffer.from(`${this.name}:test`).toString('base64')}`,
      },
    })

    socket.onopen = (): void => {
      const socketId = 'foo' // request.headers['sec-websocket-key']
      this.logger.info('Connected: ' + socketId)

      this.sendBootNotification(socket)

      setTimeout(() => {
        if (socket.OPEN) {
          this.sendStatusNotification(socket)
        }
      }, 500)

      setTimeout(() => {
        if (socket.OPEN) {
          this.sendHeartbeat(socket)
        }
      }, 1000)

      setTimeout(() => {
        if (socket.OPEN) {
          this.sendAuthorization(socket)
        }
      }, 1500)
    }

    socket.onmessage = (msg: WebSocket.MessageEvent): void => {
      const msgData = JSON.parse(msg.data.toString())
      this.logger.debug('Received', msgData)
      if (!Array.isArray(msgData)) {
        throw new Error('Incoming data are not an array')
      }
      const obj = {
        messageTypeId: msgData[0],
        messageId: msgData[1],
        payload: msgData[2],
      }
      const response = toClass(OcppResponseMessageDto, obj)

      const request = this.sendList.find((x) => x.messageId === response.messageId)
      if (request) {
        const index = this.sendList.indexOf(request)
        this.sendList.splice(index, 1)
        this.logger.info(`-IN-  ${request.action}`)
        this.messageReceived(request.action, response.payload)
      }
    }

    socket.onerror = (err: WebSocket.ErrorEvent): void => {
      this.logger.error(err.message)
    }

    socket.onclose = (): void => {
      this.logger.info('Connection closed')
      setTimeout(() => this.run(), 3000)
    }
  }

  private messageReceived(action: OcppMessageEnum, payload: ResponseBaseDto): void {
    switch (action) {
      case OcppMessageEnum.BootNotification:
        return this.bootNotification(toClass(BootNotificationResponseDto, payload))
      case OcppMessageEnum.Heartbeat:
        return this.heartbeat(toClass(HeartbeatResponseDto, payload))
      case OcppMessageEnum.StatusNotification:
        return this.statusNotification(toClass(StatusNotificationResponseDto, payload))
      case OcppMessageEnum.Authorize:
        return this.authorize(toClass(AuthorizeResponseDto, payload))
      default:
        throw new CsmsError(OcppErrorCodeEnum.NotSupported, action)
    }
  }

  private bootNotification(payload: BootNotificationResponseDto): void {
    // nothing to do
  }

  private heartbeat(payload: HeartbeatResponseDto): void {
    // nothing to do
  }

  private statusNotification(payload: StatusNotificationResponseDto): void {
    // nothing to do
  }

  private authorize(payload: AuthorizeResponseDto): void {
    if (payload.idTokenInfo.status === AuthorizationStatusEnum.Accepted) {
      this.logger.info(payload.idTokenInfo.status)
    } else {
      this.logger.error(payload.idTokenInfo.status)
    }
  }
}
