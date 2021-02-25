import {
  RequestBaseDto,
  OcppBaseMessageDto,
  OcppRequestMessageDto,
  actionDtoMapping,
  handleIncomingMessage,
} from '@yellowgarbagebag/ocpp-lib'
import { v4 as uuid } from 'uuid'
import { ChargingStation } from './charging-station'

export class ChargingStationSimulator extends ChargingStation {
  public constructor(
    uniqueIdentifier: string,
    private readonly sendCallback: (msg: string) => boolean,
    private readonly disconnectCallback: () => void,
  ) {
    super(uniqueIdentifier)
  }

  public send(payload: RequestBaseDto): void {
    const mapping = actionDtoMapping.find((x) => payload instanceof x.requestDto)
    if (!mapping) {
      throw new Error('No action mapping found' + payload)
    }

    const msg = new OcppRequestMessageDto(uuid(), mapping.action, payload)
    this.logger.info(`Outgoing Request | ${msg.action} | ${msg.messageId}`)
    this.logger.debug('Send', msg)
    if (this.sendCallback(msg.toMessageString())) {
      this.addToSendList(msg)
    } else {
      this.logger.info('Send failed')
    }
  }

  public onMessage(data: any): void {
    const result: OcppBaseMessageDto | undefined = handleIncomingMessage(this, data)
    if (result) {
      this.send(result.toMessageString())
    }
  }

  public onError(msg: string): void {
    this.logger.error(msg)
  }

  public onOpen(): void {
    this.logger.info('Connection opened')
  }

  public onClose(): void {
    this.logger.info('Connection closed')
  }

  public disconnect(): void {
    this.disconnectCallback()
  }
}
