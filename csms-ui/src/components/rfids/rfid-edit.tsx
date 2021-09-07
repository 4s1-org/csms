import React from 'react'
import { RfidCardModel } from '@4s1/csms-lib'

interface IState {}

interface IProps {
  model: RfidCardModel
}

class RfidEdit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}

    this.onRfidChange = this.onRfidChange.bind(this)
    this.onDescriptionChange = this.onDescriptionChange.bind(this)
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
}

export default RfidEdit
