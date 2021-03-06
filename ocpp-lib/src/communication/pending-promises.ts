import { OcppRequestMessageDto } from '../ocpp-messages/ocpp-request-message.dto'

export class PendingPromises {
  public readonly timestamp: number

  constructor(
    public readonly msg: OcppRequestMessageDto,
    public readonly resolve: (value: any) => void,
    public readonly reject: (reason?: any) => void,
  ) {
    this.timestamp = Date.now()
  }
}
