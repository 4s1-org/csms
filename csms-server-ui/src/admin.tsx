import React from 'react'
import ChargingStationComp from './charging-station'
import { ChargingStationModel, SerializationHelper } from '@yellowgarbagebag/csms-lib'
import './admin.css'
interface IState {
  data: ChargingStationModel[]
  server: string
  username: string
  password: string
}

interface IProps {}

class AdminComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      data: [],
      server: 'localhost:3000',
      username: 'admin',
      password: '',
    }

    this.onBtnLoginClick = this.onBtnLoginClick.bind(this)

    this.onEdtServerChange = this.onEdtServerChange.bind(this)
    this.onEdtUsernameChange = this.onEdtUsernameChange.bind(this)
    this.onEdtPasswordChange = this.onEdtPasswordChange.bind(this)
  }

  private async login(): Promise<void> {
    var authToken = window.btoa(`${this.state.username}:${this.state.password}`)
    document.cookie = 'X-Authorization=' + authToken + '; path=/'

    const ws = new WebSocket(`wss://${this.state.server}/admin`, ['ocpp2.0.1'])

    ws.onopen = () => {
      console.log('IT WORKS')
    }
    ws.onmessage = (msg: any): void => {
      const data = SerializationHelper.deserializeArray(ChargingStationModel, msg.data)
      this.setState({
        data,
      })
    }
    ws.onerror = (msg: any): void => {}
    ws.onclose = (): void => {}
  }

  public render(): JSX.Element {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark flex-column flex-md-row">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              placeholder="Server"
              aria-label="Server"
              type="text"
              onChange={this.onEdtServerChange}
              value={this.state.server}
            />
            <input
              className="form-control mr-sm-2"
              placeholder="Username"
              aria-label="Username"
              type="text"
              onChange={this.onEdtUsernameChange}
              value={this.state.username}
            />
            <input
              className="form-control mr-sm-2"
              placeholder="Password"
              aria-label="Password"
              type="password"
              onChange={this.onEdtPasswordChange}
              value={this.state.password}
            />
            <button className="btn mr-sm-2 bg-light" type="submit" onClick={this.onBtnLoginClick}>
              Login
            </button>
            <button className="btn mr-sm-2 bg-light" type="submit" onClick={this.onBtnLogoutClick}>
              Logout
            </button>
          </form>
        </nav>

        <div className="container-fluid">
          <div className="row">
            {this.state.data.map((item) => (
              <ChargingStationComp key={item.uniqueIdentifier} data={item}></ChargingStationComp>
            ))}
          </div>
        </div>
      </div>
    )
  }

  private onBtnLoginClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.login()
  }

  private onBtnLogoutClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.login()
  }

  private onEdtServerChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      ...this.state,
      server: e.currentTarget.value,
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

export default AdminComp
