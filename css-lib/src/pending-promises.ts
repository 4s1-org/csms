import { OcppRequestMessageDto } from '@yellowgarbagebag/ocpp-lib'

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