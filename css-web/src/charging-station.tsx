import React from 'react'
import { ChargingStation, WebSocketClient } from '@yellowgarbagebag/css-lib'

interface IState {
  uniqueIdentifier: string
  username: string
  password: string
  cs: ChargingStation | undefined
  client: WebSocketClient | undefined
  isConnected: boolean
  // ToDo: Der muss hier raus
  socket: WebSocket | undefined
}

interface IProps {}

class ChargingStationComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      uniqueIdentifier: 'LS001',
      username: 'LS001',
      password: 'test',
      isConnected: false,
      cs: undefined,
      client: undefined,
      socket: undefined,
    }

    this.onBtnConnectClick = this.onBtnConnectClick.bind(this)
    this.onBtnDisconnectClick = this.onBtnDisconnectClick.bind(this)
    this.onBtnSendBootNotificationClick = this.onBtnSendBootNotificationClick.bind(this)

    this.onEdtUniqueIdentifierChange = this.onEdtUniqueIdentifierChange.bind(this)
    this.onEdtUsernameChange = this.onEdtUsernameChange.bind(this)
    this.onEdtPasswordChange = this.onEdtPasswordChange.bind(this)
  }

  private connect(): void {
    var authToken = window.btoa(`${this.state.username}:${this.state.password}`)
    document.cookie = 'X-Authorization=' + authToken + '; path=/'

    const cs = new ChargingStation(this.state.uniqueIdentifier, this.state.username, this.state.password)
    const socket = new WebSocket(`wss://localhost:3000/ocpp/${this.state.uniqueIdentifier}`, ['ocpp2.0.1'])

    const sendCallback = (msg: any): boolean => {
      if (socket && socket.OPEN) {
        socket.send(msg)
        return true
      }
      return false
    }
    const client = new WebSocketClient(cs, sendCallback)

    this.setState({
      ...this.state,
      cs,
      client,
      socket,
      isConnected: true,
    })

    socket.onopen = (): void => {
      cs.connect()
    }

    // Handling, besonders der Fehler, wie im Backend lösen
    socket.onmessage = (ev: MessageEvent<any>): void => {
      client.onMessage(ev.data)
    }

    socket.onerror = (ev: Event): void => {
      cs.logger.error('Error')
    }

    socket.onclose = (ev: CloseEvent): void => {
      cs.logger.info('Connection closed')
    }
  }

  private disconnect(): void {
    if (this.state.client && this.state.cs && this.state.socket) {
      this.state.cs.disconnect()
      this.state.socket.close()
    }
    this.setState({
      ...this.state,
      cs: undefined,
      client: undefined,
      isConnected: false,
      socket: undefined,
    })
  }

  public render(): JSX.Element {
    return (
      <div>
        UniqueIdentifier:
        <input
          type="text"
          value={this.state.uniqueIdentifier}
          style={{ width: 100 }}
          onChange={this.onEdtUniqueIdentifierChange}
          disabled={this.state.isConnected}
        />
        <br />
        Username:
        <input
          type="text"
          value={this.state.username}
          style={{ width: 100 }}
          onChange={this.onEdtUsernameChange}
          disabled={this.state.isConnected}
        />
        <br />
        Password:
        <input
          type="password"
          value={this.state.password}
          style={{ width: 100 }}
          onChange={this.onEdtPasswordChange}
          disabled={this.state.isConnected}
        />
        <br />
        <button type="button" onClick={this.onBtnConnectClick} disabled={this.state.isConnected}>
          Connect
        </button>
        &nbsp;
        <button type="button" onClick={this.onBtnDisconnectClick} disabled={!this.state.isConnected}>
          Disconnect
        </button>
        <br />
        <button type="button" onClick={this.onBtnSendBootNotificationClick} disabled={!this.state.isConnected}>
          Send BootNotification
        </button>
        <br />
      </div>
    )
  }

  private onBtnConnectClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.connect()
  }

  private onBtnDisconnectClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.disconnect()
  }

  private onBtnSendBootNotificationClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()

    if (this.state.client && this.state.cs) {
      this.state.client.send(this.state.cs.sendBootNotificationRequest())
    }
  }

  private onEdtUniqueIdentifierChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      ...this.state,
      uniqueIdentifier: e.currentTarget.value,
    })
  }

  private onEdtUsernameChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      ...this.state,
      username: e.currentTarget.value,
    })
  }

  private onEdtPasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      ...this.state,
      password: e.currentTarget.value,
    })
  }
}

export default ChargingStationComp
