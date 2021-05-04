import React from 'react'
import { UserModel } from '@yellowgarbagebag/csms-lib'

interface IState {}

interface IProps {
  model: UserModel
}

class UserEdit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}

    this.onRfidChange = this.onRfidChange.bind(this)
    this.onDescriptionChange = this.onDescriptionChange.bind(this)
    this.onCostCenterChange = this.onCostCenterChange.bind(this)
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
          <label className="col-sm-4 col-form-label">Description</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" value={this.props.model.description} onChange={this.onDescriptionChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Cost center</label>
          <div className="col-sm-8">
            <input type="text" className="form-control" value={this.props.model.costCenter} onChange={this.onCostCenterChange} />
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

  private onDescriptionChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    this.setState({ ...this.state })
    this.props.model.description = e.currentTarget.value
  }

  private onCostCenterChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault()
    this.setState({ ...this.state })
    this.props.model.costCenter = e.currentTarget.value
  }
}

export default UserEdit
