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

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  public componentDidMount(): void {
    if (process.env.NODE_ENV === 'development') {
      this.login('localhost:3000', 'admin', 'admin')
    }
  }

  public render(): JSX.Element {
    return (
      <div>
        <LoginPanelComp
          onLoginClick={this.login}
          onLogoutClick={this.logout}
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

  private login(server: string, username: string, password: string): void {
    var authToken = window.btoa(`${username}:${password}`)
    document.cookie = 'X-Authorization=' + authToken + '; path=/'

    const ws = new WebSocket(`wss://${server}/admin`, ['ocpp2.0.1'])

    ws.onopen = () => {
      this.setState({
        ws,
        isConnected: true,
        chargingStationModels: [],
      })
    }
    ws.onmessage = (msg: any): void => {
      const model = SerializationHelper.deserialize(ChargingStationModel, msg.data)
      this.updateChargingStationModel(model)
    }
    ws.onerror = (msg: any): void => {}
    ws.onclose = (): void => {
      this.setState({
        ws: undefined,
        isConnected: false,
        chargingStationModels: [],
      })
    }
  }

  private updateChargingStationModel(model: ChargingStationModel): void {
    var idx = this.state.chargingStationModels.findIndex((x) => x.uniqueIdentifier === model.uniqueIdentifier)
    if (idx === -1) {
      this.state.chargingStationModels.push(model)
      this.setState({
        chargingStationModels: this.state.chargingStationModels,
      })
    } else {
      this.setState({
        chargingStationModels: [
          ...this.state.chargingStationModels.slice(0, idx),
          model,
          ...this.state.chargingStationModels.slice(idx + 1),
        ],
      })
    }
  }

  private logout(): void {
    if (this.state.ws) {
      this.state.ws.close()
    }
  }
}

export default AdminPageComp
