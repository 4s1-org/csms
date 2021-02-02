import {
  RequestBaseDto,
  OcppBaseCallDto,
  OcppRequestCallDto,
  actionDtoMapping,
  handleIncomingCall,
} from '@yellowgarbagebag/csms-shared'
import { v4 as uuid } from 'uuid'
import WebSocket from 'ws'
import { ChargingStation } from './charging-station'

export class WebSocketClient {
  private socket: WebSocket | undefined

  public constructor(private readonly cs: ChargingStation) {
    // nothing to do
  }

  private sendRequest(payload: RequestBaseDto): void {
    const mapping = actionDtoMapping.find((x) => payload instanceof x.requestDto)
    if (!mapping) {
      throw new Error('No mapping found')
    }

    const msg = new OcppRequestCallDto(uuid(), mapping.action, payload)
    this.cs.logger.info(`Outgoing Request | ${msg.action} | ${msg.messageId}`)
    this.cs.logger.debug('Send', msg)
    if (this.socket && this.socket.OPEN) {
      this.socket.send(msg.toCallString())
      this.cs.addToSendList(msg)
    }
  }

  public async run(): Promise<void> {
    this.socket = new WebSocket(`wss://localhost:3000/ocpp/${this.cs.uniqueIdentifier}`, ['ocpp2.0.1'], {
      headers: {
        authorization: `Basic ${Buffer.from(`${this.cs.username}:${this.cs.password}`).toString('base64')}`,
      },
    })

    this.socket.onopen = (): void => {
      const socketId = 'foo' // request.headers['sec-websocket-key']
      this.cs.connect()

      this.sendRequest(this.cs.sendBootNotificationRequest())

      // setTimeout(() => {
      //   this.sendRequest(this.cs.sendStatusNotification())
      // }, 200)

      // setTimeout(() => {
      //   this.sendRequest(this.cs.sendAuthorization())
      // }, 700)

      // setTimeout(() => {
      //   this.sendRequest(this.cs.sendMeterValue())
      // }, 920)
    }

    // Handling, besonders der Fehler, wie im Backend lösen
    this.socket.onmessage = (msg: WebSocket.MessageEvent): void => {
      const result: OcppBaseCallDto | undefined = handleIncomingCall(this.cs, msg.data)
      if (result && this.socket && this.socket.OPEN) {
        this.socket.send(result.toCallString())
      }
    }

    this.socket.onerror = (err: WebSocket.ErrorEvent): void => {
      this.cs.logger.error(err.message)
    }

    this.socket.onclose = (): void => {
      this.cs.logger.info('Connection closed')
      setTimeout(() => this.run(), 3000)
    }
  }
}
