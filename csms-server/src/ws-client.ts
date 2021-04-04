import WebSocket from 'ws'
import { Logger } from '@yellowgarbagebag/common-lib'
import { WsClientBase } from '@yellowgarbagebag/ocpp-lib'
import { ProcessEnv } from './process-env'

export class WsClient extends WsClientBase {
  public readonly logger = new Logger(this.uniqueIdentifier, ProcessEnv.LOG_LEVEL)

  constructor(uniqueIdentifier: string, private readonly socket: WebSocket) {
    super(uniqueIdentifier)
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close()
    }
  }

  protected sendInternal(msg: string): boolean {
    if (this.socket && this.socket.OPEN) {
      this.socket.send(msg)
      return true
    }
    return false
  }
}
