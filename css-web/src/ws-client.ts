import { WsClientBase, IReceiveMessage } from '@yellowgarbagebag/ocpp-lib'
export class WsClient extends WsClientBase {
  private socket: WebSocket | undefined

  public connect(
    receiveMessage: IReceiveMessage,
    username: string,
    password: string,
    server = 'localhost:3000',
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      var authToken = window.btoa(`${username}:${password}`)
      document.cookie = 'X-Authorization=' + authToken + '; path=/'

      this.socket = new WebSocket(`wss://${server}/ocpp/${this.uniqueIdentifier}`, ['ocpp2.0.1'])

      this.socket.onopen = (): void => {
        resolve()
      }

      this.socket.onmessage = (ev: MessageEvent): void => {
        this.onMessage(ev.data, receiveMessage)
      }

      this.socket.onerror = (ev: Event): void => {
        reject('There was an error on WebSocket connection. ' + ev)
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
