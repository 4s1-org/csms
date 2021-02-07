import {
  RequestBaseDto,
  OcppBaseMessageDto,
  OcppRequestMessageDto,
  actionDtoMapping,
  handleIncomingMessage,
} from '@yellowgarbagebag/csms-shared'
import { v4 as uuid } from 'uuid'
import { ChargingStation } from './charging-station'

export class WebSocketClient {
  public constructor(private readonly cs: ChargingStation, private readonly socketSend: (msg: string) => boolean) {
    // nothing to do
  }

  public send(payload: RequestBaseDto): void {
    const mapping = actionDtoMapping.find((x) => payload instanceof x.requestDto)
    if (!mapping) {
      throw new Error('No action mapping found' + payload)
    }

    const msg = new OcppRequestMessageDto(uuid(), mapping.action, payload)
    this.cs.logger.info(`Outgoing Request | ${msg.action} | ${msg.messageId}`)
    this.cs.logger.debug('Send', msg)
    if (this.socketSend(msg.toMessageString())) {
      this.cs.addToSendList(msg)
    } else {
      this.cs.logger.info('Send failed')
    }
  }

  public onMessage(data: any): void {
    const result: OcppBaseMessageDto | undefined = handleIncomingMessage(this.cs, data)
    if (result) {
      this.send(result.toMessageString())
    }
  }

  public onError(data: any): void {
    this.cs.logger.error(data)
  }

  public onClose(): void {
    this.cs.logger.info('Connection closed')
  }
}
