import React from "react";
import "./charging-station.css";
import ChargingStationComp from './charging-station'

interface IState {
  data: {_username:string,_state:string}[]
}

interface IProps {
}

class AdminComp extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      data:[]
    };
  }

  public async componentDidMount(): Promise<void> {
     await this.loadData();
  }

  public async componentDidUpdate(prevProps: IProps): Promise<void> {
    //   await this.loadData();
   }

  private async loadData(): Promise<void> {
    const authToken = 'YWRtaW46YWRtaW4=' // admin:admin
  document.cookie = 'X-Authorization=' + authToken + '; path=/'


   const ws = new WebSocket('wss://localhost:3000/admin', ['ocpp2.0.1'])

  ws.onopen = () => {
    console.log('IT WORKS')
  }
  ws.onmessage = (msg: any): void => {
    this.setState({
      data:JSON.parse(msg.data)
    })
  }
  ws.onerror = (msg: any): void => {}
  ws.onclose = (): void => {}
  }



  public render(): JSX.Element {
    return  (
      <div>
     {this.state.data.map(item=>
        <ChargingStationComp key={item._username} name={item._username} state={item._state}></ChargingStationComp>
     )}
      </div>
    );
  }
}

export default AdminComp;
