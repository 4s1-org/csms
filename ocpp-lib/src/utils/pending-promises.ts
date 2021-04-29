import { OcppCallDto } from '../ocpp-rpc/ocpp-call.dto'

/**
 * Helperclass for promises, which are pending.
 */
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