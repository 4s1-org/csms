import React from 'react'
import { ChargingStationSimulator } from '@yellowgarbagebag/css-lib'
import LoginPanelComp from './login-panel'
import ChargingStationComp from './charging-station'

interface IState {
  isConnected: boolean
  css: ChargingStationSimulator | undefined
}

interface IProps {}

class SimulatorPageComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      isConnected: false,
      css: undefined,
    }

    this.onLoginClick = this.onLoginClick.bind(this)
    this.onLogoutClick = this.onLogoutClick.bind(this)
  }

  public render(): JSX.Element {
    return (
      <div>
        <LoginPanelComp
          onLoginClick={this.onLoginClick}
          onLogoutClick={this.onLogoutClick}
          isConnected={this.state.isConnected}
        ></LoginPanelComp>
        <br />
        <div className="container-fluid">
          <ChargingStationComp css={this.state.css} />
        </div>
      </div>
    )
  }

  private onLoginClick(server: string, uniqueIdentifier: string, username: string, password: string): void {
    var authToken = window.btoa(`${username}:${password}`)
    document.cookie = 'X-Authorization=' + authToken + '; path=/'

    const socket = new WebSocket(`wss://${server}/ocpp/${uniqueIdentifier}`, ['ocpp2.0.1'])

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

    const css = new ChargingStationSimulator(uniqueIdentifier, sendCallback, disconnectCallback)

    socket.onopen = (): void => {
      this.setState({
        ...this.state,
        css,
        isConnected: true,
      })

      css.onOpen()
    }

    socket.onmessage = (ev: MessageEvent<any>): void => {
      css.onMessage(ev.data)
    }

    socket.onerror = (_ev: Event): void => {
      css.onError('There was an error on WebSocket connection.')

      this.setState({
        ...this.state,
        isConnected: false,
        css: undefined,
      })
    }

    socket.onclose = (): void => {
      css.onClose()

      this.setState({
        ...this.state,
        isConnected: false,
        css: undefined,
      })
    }
  }

  private onLogoutClick(): void {
    if (this.state.css) {
      this.state.css.disconnect()
    }
  }
}

export default SimulatorPageComp
