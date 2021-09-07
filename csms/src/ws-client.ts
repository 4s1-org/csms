import WebSocket from 'ws'
import { Logger } from '@4s1/common-lib'
import { WsClientBase } from '@4s1/ocpp-lib'
import { ProcessEnv } from './process-env'

export class WsClient extends WsClientBase {
  public constructor(uniqueIdentifier: string, private readonly socket: WebSocket) {
    super(uniqueIdentifier, new Logger(uniqueIdentifier, ProcessEnv.LOG_LEVEL))
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
