import React from 'react'
import { ChargingStation } from '@yellowgarbagebag/css-lib'

interface IState {}

interface IProps {
  cs: ChargingStation | undefined
  isConnected: boolean
}

class ChargingStationComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.sendBootNotificationRequest = this.sendBootNotificationRequest.bind(this)
    this.sendHeartbeatRequest = this.sendHeartbeatRequest.bind(this)
    this.sendStatusNotificationRequest = this.sendStatusNotificationRequest.bind(this)
    this.sendAuthorizationRequest_PinCode = this.sendAuthorizationRequest_PinCode.bind(this)
    this.sendAuthorizationRequest_Rfid = this.sendAuthorizationRequest_Rfid.bind(this)
    this.sendMeterValueRequest = this.sendMeterValueRequest.bind(this)
    this.sendNotifyEventRequest_LockFailure = this.sendNotifyEventRequest_LockFailure.bind(this)
  }

  public render(): JSX.Element {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <button type="button" onClick={this.sendBootNotificationRequest} disabled={!this.props.isConnected}>
            Send BootNotification
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendHeartbeatRequest} disabled={!this.props.isConnected}>
            Send Heartbeat
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendStatusNotificationRequest} disabled={!this.props.isConnected}>
            Send StatusNotification
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendAuthorizationRequest_PinCode} disabled={!this.props.isConnected}>
            Send Authorization (with Pin Code)
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendAuthorizationRequest_Rfid} disabled={!this.props.isConnected}>
            Send Authorization (with RFID)
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendMeterValueRequest} disabled={!this.props.isConnected}>
            Send MeterValue
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendNotifyEventRequest_LockFailure} disabled={!this.props.isConnected}>
            Send NotifyEvent (LockFailure)
          </button>
        </li>
      </ul>
    )
  }

  private async sendBootNotificationRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendBootNotificationRequest()
  }

  private async sendHeartbeatRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendHeartbeatRequest()
  }

  private async sendAuthorizationRequest_PinCode(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendAuthorizationRequest_PinCode()
  }

  private async sendAuthorizationRequest_Rfid(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendAuthorizationRequest_Rfid()
  }

  private async sendMeterValueRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendMeterValueRequest()
  }

  private async sendStatusNotificationRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendStatusNotificationRequest()
  }

  private async sendNotifyEventRequest_LockFailure(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendNotifyEventRequest_LockFailure()
  }
}

export default ChargingStationComp
