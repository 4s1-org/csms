import React from 'react'
import { ChargingStationModel, SerializationHelper } from '@yellowgarbagebag/csms-lib'
import './main.css'
import LoginPanelComp from './login-panel'
import { toBase64 } from '@yellowgarbagebag/common-lib'
import MainOverview from './overview/main-overview'

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

  public componentDidMount(): void {}

  public render(): JSX.Element {
    return (
      <div>
        <LoginPanelComp onLoginClick={this.login} onLogoutClick={this.logout} isConnected={this.state.isConnected}></LoginPanelComp>
        <br />
        <MainOverview models={this.state.chargingStationModels}></MainOverview>
      </div>
    )
  }

  private login(https: boolean, server: string, username: string, password: string): void {
    const authToken = toBase64([username, password].join(':'))
    const prot = https ? 'wss' : 'ws'
    const ws = new WebSocket(`${prot}://${server}/admin`, ['ocpp2.0.1', `Auth.${authToken}`])

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
    ws.onerror = (msg: any): void => {
      console.error(msg)
    }
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
