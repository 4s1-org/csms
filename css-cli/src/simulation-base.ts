import { ChargingStationSimulator } from '@yellowgarbagebag/css-lib'
import { RequestBaseDto, ResponseBaseDto } from '@yellowgarbagebag/ocpp-lib'
import WebSocket from 'ws'

export abstract class SimulationBase {
  protected css: ChargingStationSimulator

  constructor(uniqueIdentifier: string, username: string, password: string, server = 'localhost:3000') {
    const socket = new WebSocket(`ws://${server}/ocpp/${uniqueIdentifier}`, ['ocpp2.0.1'], {
      headers: {
        authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
      },
    })

    const sendCallback = (msg: any): boolean => {
      if (socket && socket.OPEN) {
        socket.send(msg)
        return true
      }
      return false
    }
    const disconnectCallback = (): void => {
      socket.close()
    }

    this.css = new ChargingStationSimulator(uniqueIdentifier, sendCallback, disconnectCallback)

    socket.onopen = async (): Promise<void> => {
      this.css.onOpen()
      await this.simulate()
    }

    socket.onmessage = (msg: WebSocket.MessageEvent): void => {
      this.css.onMessage(msg.data)
    }

    socket.onerror = (err: WebSocket.ErrorEvent): void => {
      this.css.onError('There was an error on WebSocket connection. ' + err.message)
    }

    socket.onclose = (): void => {
      this.css.onClose()
    }
  }

  protected abstract simulate(): Promise<void>

  protected async send(payload: RequestBaseDto): Promise<ResponseBaseDto | undefined> {
    return
  }
}
