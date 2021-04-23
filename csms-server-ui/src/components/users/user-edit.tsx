import React from 'react'
import { UserModel } from '@yellowgarbagebag/csms-lib'

interface IState {}

interface IProps {
  model: UserModel
  editMode: boolean
}

class UserEdit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}

    this.onRfidChange = this.onRfidChange.bind(this)
    this.onLastNameChange = this.onLastNameChange.bind(this)
    this.onFirstNameChange = this.onFirstNameChange.bind(this)
    this.onCompanyChange = this.onCompanyChange.bind(this)
  }

  public render(): JSX.Element {
    return (
      <form>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">RFID</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" value={this.props.model.rfid} onChange={this.onRfidChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Last name</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" value={this.props.model.lastName} onChange={this.onLastNameChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">First name</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" value={this.props.model.firstName} onChange={this.onFirstNameChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Company</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" value={this.props.model.companyName} onChange={this.onCompanyChange} />
          </div>
        </div>
      </form>
    )
  }

  private onRfidChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    this.setState({ ...this.state })
    this.props.model.rfid = e.currentTarget.value
  }

  private onLastNameChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    this.setState({ ...this.state })
    this.props.model.lastName = e.currentTarget.value
  }

  private onFirstNameChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    this.setState({ ...this.state })
    this.props.model.firstName = e.currentTarget.value
  }

  private onCompanyChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    this.setState({ ...this.state })
    this.props.model.companyName = e.currentTarget.value
  }
}

export default UserEdit
