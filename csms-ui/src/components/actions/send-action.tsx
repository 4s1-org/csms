import React from 'react'
import { ChargingStationModel, UiToCsmsCmdEnum, UiToCsmsCsSubCmdEnum, UiToCsmsMsg } from '@4s1/csms-lib'

interface IState {}

interface IProps {
  model: ChargingStationModel
  send: (msg: UiToCsmsMsg) => void
}

class SendActionComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.sendSetVariables = this.sendSetVariables.bind(this)
    this.sendGetBaseReport = this.sendGetBaseReport.bind(this)
    this.sendChangeAvailability = this.sendChangeAvailability.bind(this)
    this.sendGetVariables = this.sendGetVariables.bind(this)
    this.sendRequestReset = this.sendRequestReset.bind(this)
    this.sendDataTransfer = this.sendDataTransfer.bind(this)
  }

  public render(): JSX.Element {
    return (
      <div className="card w-100">
        <h5 className="card-header">
          {this.props.model.uniqueIdentifier}
          {!this.props.model.enabled ? ' (disabled)' : ''}
        </h5>
        <div className="card-body">
          <button className="btn btn-secondary" type="button" onClick={this.sendSetVariables}>
            Send SetVariables
          </button>
          &nbsp;
          <button className="btn btn-secondary" type="button" onClick={this.sendGetBaseReport}>
            Send GetBaseReport
          </button>
          &nbsp;
          <button className="btn btn-secondary" type="button" onClick={this.sendGetVariables}>
            Send GetVariables
          </button>
          &nbsp;
          <button className="btn btn-secondary" type="button" onClick={this.sendChangeAvailability}>
            Send ChangeAvailability
          </button>
          &nbsp;
          <button className="btn btn-secondary" type="button" onClick={this.sendRequestReset}>
            Send RequestReset
          </button>
          &nbsp;
          <button className="btn btn-secondary" type="button" onClick={this.sendDataTransfer}>
            Send DataTransfer
          </button>
        </div>
      </div>
    )
  }

  private async sendSetVariables(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.csAction, UiToCsmsCsSubCmdEnum.sendSetVariables, this.props.model.uniqueIdentifier))
  }

  private async sendGetBaseReport(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.csAction, UiToCsmsCsSubCmdEnum.sendGetBaseReport, this.props.model.uniqueIdentifier))
  }

  private async sendChangeAvailability(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    this.props.send(
      new UiToCsmsMsg(UiToCsmsCmdEnum.csAction, UiToCsmsCsSubCmdEnum.sendChangeAvailability, this.props.model.uniqueIdentifier),
    )
  }

  private async sendRequestReset(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.csAction, UiToCsmsCsSubCmdEnum.sendRequestReset, this.props.model.uniqueIdentifier))
  }

  private async sendGetVariables(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.csAction, UiToCsmsCsSubCmdEnum.sendGetVariables, this.props.model.uniqueIdentifier))
  }

  private async sendDataTransfer(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    this.props.send(new UiToCsmsMsg(UiToCsmsCmdEnum.csAction, UiToCsmsCsSubCmdEnum.sendDataTransfer, this.props.model.uniqueIdentifier))
  }
}

export default SendActionComp
