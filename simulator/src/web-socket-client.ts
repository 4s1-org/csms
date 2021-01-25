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
  OcppMessageTypeIdEnum,
  OcppErrorResponseMessageDto,
  MeterValuesResponseDto,
} from '@yellowgarbagebag/csms-shared'
import { v4 as uuid } from 'uuid'
import WebSocket from 'ws'
import { MeterValueDto, MeterValuesRequestDto, SampledValueDto } from '../../shared/dist'

export class WebSocketClient {
  private logger = new Logger(this.name)
  private heartbeatInterval = 6000
  private socket: WebSocket | undefined

  private sendList: OcppRequestMessageDto[] = []

  public constructor(public readonly name: string) {
    // nothing to do
  }

  private send(action: OcppMessageEnum, payload: RequestBaseDto): void {
    const msg = new OcppRequestMessageDto(uuid(), action, payload)
    this.logger.info(`-OUT- ${action}`)
    this.logger.debug('Send', msg)
    if (this.socket && this.socket.OPEN) {
      this.socket.send(msg.toString())
    }
    this.sendList.push(msg)
  }

  private sendBootNotification(): void {
    const csDto = new ChargingStationDto('SingleSocketCharger', 'VendorX')
    const payload = new BootNotificationRequestDto(csDto, BootReasonEnum.PowerUp)

    this.send(OcppMessageEnum.BootNotification, payload)
  }

  private sendHeartbeat(): void {
    if (this.socket && this.socket.OPEN) {
      setTimeout(() => {
        const payload = new HeartbeatRequestDto()
        this.send(OcppMessageEnum.Heartbeat, payload)
        this.sendHeartbeat()
      }, this.heartbeatInterval * 1000)
    }
  }

  private sendAuthorization(): void {
    const idTocken = new IdTokenDto('1234', IdTokenEnum.KeyCode)
    const payload = new AuthorizeRequestDto(idTocken)
    this.send(OcppMessageEnum.Authorize, payload)
  }

  private sendStatusNotification(): void {
    const payload = new StatusNotificationRequestDto(new Date().toISOString(), ConnectorStatusEnum.Available, 1, 1)
    this.send(OcppMessageEnum.StatusNotification, payload)
  }

  private sendMeterValue(): void {
    const sampleValue = new SampledValueDto(53)
    const meterValue = new MeterValueDto([sampleValue], new Date().toISOString())
    const payload = new MeterValuesRequestDto(1, [meterValue])
    this.send(OcppMessageEnum.MeterValues, payload)
  }

  public async run(): Promise<void> {
    this.socket = new WebSocket(`wss://localhost:3000/ocpp/${this.name}`, ['ocpp2.0.1'], {
      headers: {
        authorization: `Basic ${Buffer.from(`${this.name}:test`).toString('base64')}`,
      },
    })

    this.socket.onopen = (): void => {
      const socketId = 'foo' // request.headers['sec-websocket-key']
      this.logger.info('Connected: ' + socketId)

      this.sendBootNotification()

      setTimeout(() => {
        this.sendStatusNotification()
      }, 200)

      setTimeout(() => {
        this.sendAuthorization()
      }, 700)

      setTimeout(() => {
        this.sendMeterValue()
      }, 920)
    }

    // Handling, besonders der Fehler, wie im Backend lösen
    this.socket.onmessage = (msg: WebSocket.MessageEvent): void => {
      const msgData = JSON.parse(msg.data.toString())
      this.logger.debug('Received', msgData)

      if (!Array.isArray(msgData)) {
        throw new Error('Incoming data are not an array')
      }
      if (msgData.length === 3 && msgData[0] === OcppMessageTypeIdEnum.Result) {
        const obj = {
          messageTypeId: msgData[0],
          messageId: msgData[1],
          payload: msgData[2],
        }
        const response: OcppResponseMessageDto = toClass(OcppResponseMessageDto, obj)
        const request: OcppRequestMessageDto = this.getRequestMessage(response.messageId)
        this.messageReceived(request.action, response.payload)
      } else if (msgData.length === 5 && msgData[0] === OcppMessageTypeIdEnum.Error) {
        const obj = {
          messageTypeId: msgData[0],
          messageId: msgData[1],
          payload: msgData[2],
        }
        const response: OcppErrorResponseMessageDto = toClass(OcppErrorResponseMessageDto, obj)
        const request: OcppRequestMessageDto = this.getRequestMessage(response.messageId)
        this.logger.error(`${request.action} | ${response.errorCode} | ${response.errorDescription}`)
      } else {
        this.logger.fatal('Unknown response type', msgData)
      }
    }

    this.socket.onerror = (err: WebSocket.ErrorEvent): void => {
      this.logger.error(err.message)
    }

    this.socket.onclose = (): void => {
      this.logger.info('Connection closed')
      setTimeout(() => this.run(), 3000)
    }
  }

  private getRequestMessage(messageId: string): OcppRequestMessageDto {
    const request = this.sendList.find((x) => x.messageId === messageId)
    if (request) {
      this.logger.info(`-IN-  ${request.action}`)
      const index = this.sendList.indexOf(request)
      this.sendList.splice(index, 1)
      return request
    } else {
      throw new Error()
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
      case OcppMessageEnum.MeterValues:
        return this.meterValues(toClass(MeterValuesResponseDto, payload))
      default:
        throw new CsmsError(OcppErrorCodeEnum.NotSupported, action)
    }
  }

  private meterValues(payload: MeterValuesResponseDto): void {
    // nothing to do
  }

  private bootNotification(payload: BootNotificationResponseDto): void {
    this.logger.info(`Set Heartbeat interval to ${payload.interval} seconds`)
    this.heartbeatInterval = payload.interval * 1000
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
