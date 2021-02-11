import React from 'react'
import ChargingStationComp from './charging-station'
import { ChargingStationState, SerializationHelper } from '@yellowgarbagebag/csms-lib'
import './admin.css'
interface IState {
  data: ChargingStationState[]
}

interface IProps {}

class AdminComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      data: [],
    }
  }

  public async componentDidMount(): Promise<void> {
    await this.loadData()
  }

  public async componentDidUpdate(prevProps: IProps): Promise<void> {}

  private async loadData(): Promise<void> {
    const authToken = 'YWRtaW46YWRtaW4=' // admin:admin
    document.cookie = 'X-Authorization=' + authToken + '; path=/'

    const ws = new WebSocket('wss://localhost:3000/admin', ['ocpp2.0.1'])

    ws.onopen = () => {
      console.log('IT WORKS')
    }
    ws.onmessage = (msg: any): void => {
      this.setState({
        data: SerializationHelper.deserializeArray(ChargingStationState, msg.data),
      })
    }
    ws.onerror = (msg: any): void => {}
    ws.onclose = (): void => {}
  }

  public render(): JSX.Element {
    return (
      <div className="flex-container">
        {this.state.data.map((item) => (
          <ChargingStationComp key={item.uniqueIdentifier} data={item}></ChargingStationComp>
        ))}
      </div>
    )
  }
}

export default AdminComp
