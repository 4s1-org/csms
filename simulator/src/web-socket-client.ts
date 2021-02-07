import {
  RequestBaseDto,
  OcppBaseMessageDto,
  OcppRequestMessageDto,
  actionDtoMapping,
  handleIncomingMessage,
} from '@yellowgarbagebag/csms-shared'
import { v4 as uuid } from 'uuid'
import { ChargingStation } from './charging-station'
import { IWebSocket } from './i-websocket'

export class WebSocketClient {
  private socket: IWebSocket

  public constructor(private readonly cs: ChargingStation, socket: IWebSocket) {
    // nothing to do
    this.socket = socket
  }

  public sendRequest(payload: RequestBaseDto): void {
    const mapping = actionDtoMapping.find((x) => payload instanceof x.requestDto)
    if (!mapping) {
      throw new Error('No mapping found')
    }

    const msg = new OcppRequestMessageDto(uuid(), mapping.action, payload)
    this.cs.logger.info(`Outgoing Request | ${msg.action} | ${msg.messageId}`)
    this.cs.logger.debug('Send', msg)
    if (this.socket && this.socket.OPEN) {
      this.socket.send(msg.toMessageString())
      this.cs.addToSendList(msg)
    }
  }

  public async run(): Promise<void> {
    // this.socket = new WebSocket(`wss://localhost:3000/ocpp/${this.cs.uniqueIdentifier}`, ['ocpp2.0.1'], {
    //   headers: {
    //     authorization: `Basic ${Buffer.from(`${this.cs.username}:${this.cs.password}`).toString('base64')}`,
    //   },
    // })

    this.socket.onopen = (): void => {
      const socketId = 'foo' // request.headers['sec-websocket-key']
      this.cs.connect()

      this.sendRequest(this.cs.sendBootNotificationRequest())

      setTimeout(() => {
        this.sendRequest(this.cs.sendStatusNotificationRequest())
      }, 100)

      setTimeout(() => {
        this.sendRequest(this.cs.sendAuthorizationRequest_PinCode())
      }, 200)

      setTimeout(() => {
        this.sendRequest(this.cs.sendAuthorizationRequest_Rfid())
      }, 300)

      setTimeout(() => {
        this.sendRequest(this.cs.sendMeterValueRequest())
      }, 400)

      setTimeout(() => {
        this.sendRequest(this.cs.sendHeartbeatRequest())
      }, 500)

      setTimeout(() => {
        this.sendRequest(this.cs.sendNotifyEventRequest_LockFailure())
      }, 600)
    }

    // Handling, besonders der Fehler, wie im Backend lösen
    this.socket.onmessage = (msg: any): void => {
      const result: OcppBaseMessageDto | undefined = handleIncomingMessage(this.cs, msg.data)
      if (result && this.socket && this.socket.OPEN) {
        this.socket.send(result.toMessageString())
      }
    }

    this.socket.onerror = (err: any): void => {
      this.cs.logger.error(err.message)
    }

    this.socket.onclose = (): void => {
      this.cs.logger.info('Connection closed')
      setTimeout(() => this.run(), 3000)
    }
  }
}
