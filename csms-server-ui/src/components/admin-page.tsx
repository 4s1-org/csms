import React from 'react'
import ChargingStationComp from './charging-station'
import { ChargingStationModel, SerializationHelper } from '@yellowgarbagebag/csms-lib'
import './admin-page.css'
import LoginPanelComp from './login-panel'

interface IState {
  chargingStationModels: ChargingStationModel[]
  isConnected: boolean
  ws: WebSocket | undefined
}

interface IProps {}

class AdminPageComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      chargingStationModels: [],
      isConnected: false,
      ws: undefined,
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
          <div className="row">
            {this.state.chargingStationModels.map((item) => (
              <ChargingStationComp key={item.uniqueIdentifier} data={item}></ChargingStationComp>
            ))}
          </div>
        </div>
      </div>
    )
  }

  private onLoginClick(server: string, username: string, password: string): void {
    var authToken = window.btoa(`${username}:${password}`)
    document.cookie = 'X-Authorization=' + authToken + '; path=/'

    const ws = new WebSocket(`wss://${server}/admin`, ['ocpp2.0.1'])

    ws.onopen = () => {
      console.log('IT WORKS')
      this.setState({
        ...this.state,
        ws,
        isConnected: true,
        chargingStationModels: [],
      })
    }
    ws.onmessage = (msg: any): void => {
      const data = SerializationHelper.deserializeArray(ChargingStationModel, msg.data)
      this.setState({
        chargingStationModels: data,
      })
    }
    ws.onerror = (msg: any): void => {}
    ws.onclose = (): void => {
      this.setState({
        ...this.state,
        ws: undefined,
        isConnected: false,
        chargingStationModels: [],
      })
    }
  }

  private onLogoutClick(): void {
    if (this.state.ws) {
      this.state.ws.close()
    }
  }
}

export default AdminPageComp
