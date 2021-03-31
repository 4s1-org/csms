import { OcppCallDto } from '../ocpp-rpc/ocpp-call.dto'

export class PendingPromises {
  public readonly timestamp: number

  constructor(
    public readonly msg: OcppCallDto,
    public readonly resolve: (value: any) => void,
    public readonly reject: (reason?: any) => void,
  ) {
    this.timestamp = Date.now()
  }
}
