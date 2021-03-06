import WebSocket from 'ws'
import { IReceiveMessage, WsClientBase } from '@4s1/ocpp-lib'
import { ProcessEnv } from './process-env'
import { Const, Logger } from '@4s1/common-lib'

export class WsClient extends WsClientBase {
  private socket: WebSocket | undefined

  public constructor(uniqueIdentifier: string) {
    super(uniqueIdentifier, new Logger(uniqueIdentifier, ProcessEnv.LOG_LEVEL))
  }

  public connect(receiveMessage: IReceiveMessage, https: boolean, server: string, username: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const prot = https ? 'wss' : 'ws'
      this.socket = new WebSocket(`${prot}://${server}/ocpp/${this.uniqueIdentifier}`, [Const.ocppProtocolName], {
        headers: {
          authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
        },
        rejectUnauthorized: false,
      })

      this.socket.onopen = (): void => {
        resolve()
      }

      this.socket.onmessage = (data: WebSocket.MessageEvent): void => {
        this.onMessage(data.data, receiveMessage)
      }

      this.socket.onerror = (err: WebSocket.ErrorEvent): void => {
        reject('There was an error on WebSocket connection. ' + err.message)
      }

      this.socket.onclose = (): void => {
        this.socket = undefined
      }
    })
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
