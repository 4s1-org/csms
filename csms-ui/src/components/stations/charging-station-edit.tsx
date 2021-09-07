import React from 'react'
import { ChargingStationModel } from '@4s1/csms-lib'

interface IState {}

interface IProps {
  model: ChargingStationModel
}

class ChargingStationEdit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}

    this.onUniqueIdentifierChange = this.onUniqueIdentifierChange.bind(this)
    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  public render(): JSX.Element {
    return (
      <form>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Unique identifier</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              value={this.props.model.uniqueIdentifier}
              onChange={this.onUniqueIdentifierChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Username</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" value={this.props.model.username} onChange={this.onUsernameChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Password</label>
          <div className="col-sm-8">
            <input type="password" className="form-control" value={this.props.model.passwordHash} onChange={this.onPasswordChange} />
          </div>
        </div>
      </form>
    )
  }

  private onUniqueIdentifierChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    this.setState({ ...this.state })
    this.props.model.uniqueIdentifier = e.currentTarget.value
  }

  private onUsernameChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    this.setState({ ...this.state })
    this.props.model.username = e.currentTarget.value
  }

  private onPasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    this.setState({ ...this.state })

    this.props.model.passwordHash = e.currentTarget.value
  }
}

export default ChargingStationEdit
