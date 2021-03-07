import WebSocket from 'ws'
import { IReceiveMessage, WsClientBase } from '@yellowgarbagebag/ocpp-lib'
export class WsClient extends WsClientBase {
  private socket: WebSocket | undefined

  public connect(
    receiveMessage: IReceiveMessage,
    username: string,
    password: string,
    server = 'localhost:3000',
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.socket = new WebSocket(`wss://${server}/ocpp/${this.uniqueIdentifier}`, ['ocpp2.0.1'], {
        headers: {
          authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
        },
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
