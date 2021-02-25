import React from 'react'

interface IState {
  server: string
  uniqueIdentifier: string
  username: string
  password: string
}

interface IProps {
  onLoginClick: (server: string, uniqueIdentifier: string, username: string, password: string) => void
  onLogoutClick: () => void
  isConnected: boolean
}

class LoginPanelComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      server: 'localhost:3000',
      uniqueIdentifier: 'LS001',
      username: 'LS001',
      password: 'test',
    }

    this.onBtnLoginClick = this.onBtnLoginClick.bind(this)
    this.onBtnLogoutClick = this.onBtnLogoutClick.bind(this)

    this.onEdtServerChange = this.onEdtServerChange.bind(this)
    this.onEdtUsernameChange = this.onEdtUsernameChange.bind(this)
    this.onEdtPasswordChange = this.onEdtPasswordChange.bind(this)
  }

  public render(): JSX.Element {
    return (
      <nav className="navbar navbar-dark bg-dark flex-column flex-md-row">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            placeholder="Server"
            aria-label="Server"
            type="text"
            onChange={this.onEdtServerChange}
            value={this.state.server}
            disabled={this.props.isConnected}
          />
          <input
            className="form-control mr-sm-2"
            placeholder="Unique Identifier"
            aria-label="Unique Identifier"
            type="text"
            onChange={this.onEdtUniqueIdentifierChange}
            value={this.state.uniqueIdentifier}
            disabled={this.props.isConnected}
          />
          &nbsp;
          <input
            className="form-control mr-sm-2"
            placeholder="Username"
            aria-label="Username"
            type="text"
            onChange={this.onEdtUsernameChange}
            value={this.state.username}
            disabled={this.props.isConnected}
          />
          <input
            className="form-control mr-sm-2"
            placeholder="Password"
            aria-label="Password"
            type="password"
            onChange={this.onEdtPasswordChange}
            value={this.state.password}
            disabled={this.props.isConnected}
          />
          <button
            className="btn mr-sm-2 bg-light"
            type="submit"
            onClick={this.onBtnLoginClick}
            disabled={this.props.isConnected}
          >
            Login
          </button>
          <button
            className="btn mr-sm-2 bg-light"
            type="submit"
            onClick={this.onBtnLogoutClick}
            disabled={!this.props.isConnected}
          >
            Logout
          </button>
        </form>
      </nav>
    )
  }

  private onBtnLoginClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.props.onLoginClick(this.state.server, this.state.uniqueIdentifier, this.state.username, this.state.password)
  }

  private onBtnLogoutClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.props.onLogoutClick()
  }

  private onEdtServerChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      ...this.state,
      server: e.currentTarget.value,
    })
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

export default LoginPanelComp
