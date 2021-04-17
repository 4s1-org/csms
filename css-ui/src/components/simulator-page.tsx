import React from 'react'
import { ChargingStation } from '@yellowgarbagebag/css-lib'
import LoginPanelComp from './login-panel'
import ChargingStationComp from './charging-station'
import { WsClient } from '../ws-client'
import { Logger } from '@yellowgarbagebag/common-lib'
import { ProcessEnv } from '../process-env'

interface IState {
  isConnected: boolean
  cs: ChargingStation | undefined
  client: WsClient | undefined
}

interface IProps {}

class SimulatorPageComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      isConnected: false,
      cs: undefined,
      client: undefined,
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
          <ChargingStationComp cs={this.state.cs} isConnected={this.state.isConnected} />
        </div>
      </div>
    )
  }

  private async onLoginClick(https: boolean, server: string, uniqueIdentifier: string, username: string, password: string): Promise<void> {
    const client = new WsClient(uniqueIdentifier)
    const cs = new ChargingStation(uniqueIdentifier, client, new Logger(uniqueIdentifier, ProcessEnv.LOG_LEVEL))
    await client.connect(cs, username, password, https, server)

    this.setState({
      cs,
      client,
      isConnected: true,
    })
  }

  private onLogoutClick(): void {
    if (this.state.client) {
      this.state.client.disconnect()
      this.setState({
        cs: undefined,
        client: undefined,
        isConnected: false,
      })
    }
  }
}

export default SimulatorPageComp
