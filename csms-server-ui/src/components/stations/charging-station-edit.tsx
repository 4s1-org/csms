import React from 'react'
import { ChargingStationModel } from '@yellowgarbagebag/csms-lib'
import { hashPassword } from '@yellowgarbagebag/common-lib'

interface IState {
  originalModel: ChargingStationModel
  starPassword: string
}

interface IProps {
  model: ChargingStationModel
  editMode: boolean
}

class ChargingStationEdit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      originalModel: JSON.parse(JSON.stringify(this.props.model)),
      starPassword: '******',
    }

    this.onUniqueIdentifierChange = this.onUniqueIdentifierChange.bind(this)
    this.onUsernameChange = this.onUsernameChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  public render(): JSX.Element {
    return (
      <form>
        {!this.props.editMode && (
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Unique identifier</label>
            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                value={this.props.model.uniqueIdentifier}
                onChange={this.onUniqueIdentifierChange}
              />
            </div>
          </div>
        )}
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Username</label>
          {this.props.editMode && (
            <div className="col-sm-5">
              <input type="text" className="form-control" value={this.state.originalModel.username} readOnly />
            </div>
          )}
          <div className="col-sm-5">
            <input type="text" className="form-control" value={this.props.model.username} onChange={this.onUsernameChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Password</label>
          {this.props.editMode && (
            <div className="col-sm-5">
              <input type="password" className="form-control" value={this.state.originalModel.passwordHash ? '******' : ''} readOnly />
            </div>
          )}
          <div className="col-sm-5">
            <input type="password" className="form-control" value={this.state.starPassword} onChange={this.onPasswordChange} />
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

    this.props.model.passwordHash = hashPassword(e.currentTarget.value)
  }
}

export default ChargingStationEdit
