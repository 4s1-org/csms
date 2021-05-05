import React from 'react'
import { ChargingStationModel, CsmsToUiCmdEnum, CsmsToUiMsg, UiToCsmsMsg, RfidCardModel } from '@yellowgarbagebag/csms-lib'
import './main.css'
import LoginPanelComp from './login-panel'
import { toBase64 } from '@yellowgarbagebag/common-lib'
import MainOverview from './overview/main-overview'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import MainChargingStations from './stations/main-stations'
import MainRfids from './rfids/main-rfids'

interface IState {
  csStates: ChargingStationModel[]
  csList: ChargingStationModel[]
  rfidCardList: RfidCardModel[]
  isConnected: boolean
  ws?: WebSocket
  send: (msg: UiToCsmsMsg) => void
}

interface IProps {}

class AdminPageComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      csStates: [],
      csList: [],
      rfidCardList: [],
      isConnected: false,
      ws: undefined,
      send: (msg: UiToCsmsMsg) => {},
    }

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  public componentDidMount(): void {}

  public render(): JSX.Element {
    return (
      <div>
        <LoginPanelComp onLoginClick={this.login} onLogoutClick={this.logout} isConnected={this.state.isConnected}></LoginPanelComp>

        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Charging Stations</Tab>
            <Tab>RFIDs</Tab>
          </TabList>

          <TabPanel>
            <MainOverview models={this.state.csStates}></MainOverview>
          </TabPanel>
          <TabPanel>
            <MainChargingStations models={this.state.csList} send={this.state.send}></MainChargingStations>
          </TabPanel>
          <TabPanel>
            <MainRfids models={this.state.rfidCardList} send={this.state.send}></MainRfids>
          </TabPanel>
        </Tabs>
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
        csStates: [],
        send: (msg: UiToCsmsMsg) => ws.send(JSON.stringify(msg)),
      })
    }
    ws.onmessage = (msg: any): void => {
      const data: CsmsToUiMsg = JSON.parse(msg.data)
      switch (data.cmd) {
        case CsmsToUiCmdEnum.csList:
          this.setState({
            ...this.state,
            csList: data.payload as ChargingStationModel[],
          })
          break
        case CsmsToUiCmdEnum.rfidList:
          this.setState({
            ...this.state,
            rfidCardList: data.payload as RfidCardModel[],
          })
          break
        case CsmsToUiCmdEnum.csState:
          this.updateChargingStationModel(data.payload as ChargingStationModel)
          break
      }
    }
    ws.onerror = (msg: any): void => {
      console.error(msg)
    }
    ws.onclose = (): void => {
      this.setState({
        ws: undefined,
        isConnected: false,
        csStates: [],
      })
    }
  }

  private updateChargingStationModel(model: ChargingStationModel): void {
    var idx = this.state.csStates.findIndex((x) => x.uniqueIdentifier === model.uniqueIdentifier)
    if (idx === -1) {
      this.state.csStates.push(model)
      this.setState({
        csStates: this.state.csStates,
      })
    } else {
      this.setState({
        csStates: [...this.state.csStates.slice(0, idx), model, ...this.state.csStates.slice(idx + 1)],
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
