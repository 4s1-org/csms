import { OcppCallDto } from '../ocpp-rpc/calls/rpc-call.dto'

/**
 * Helperclass for promise, which are pending.
 */
export class PendingPromise {
  public readonly timestamp: number

  constructor(
    public readonly msg: OcppCallDto,
    public readonly resolve: (value: any) => void,
    public readonly reject: (reason?: any) => void,
  ) {
    this.timestamp = Date.now()
  }
}
