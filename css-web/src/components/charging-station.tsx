import React from 'react'
import { ChargingStationSimulator } from '@yellowgarbagebag/css-lib'

interface IState {}

interface IProps {
  css: ChargingStationSimulator | undefined
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

  private send(payload: any | undefined): void {
    const css = this.props.css

    if (css && payload) {
      try {
        css.send(payload)
      } catch (err) {
        console.error(err)
      }
    }
  }

  private sendBootNotificationRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.send(this.props.css?.sendBootNotificationRequest() || undefined)
  }

  private sendHeartbeatRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.send(this.props.css?.sendHeartbeatRequest() || undefined)
  }

  private sendAuthorizationRequest_PinCode(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.send(this.props.css?.sendAuthorizationRequest_PinCode() || undefined)
  }

  private sendAuthorizationRequest_Rfid(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.send(this.props.css?.sendAuthorizationRequest_Rfid() || undefined)
  }

  private sendMeterValueRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.send(this.props.css?.sendMeterValueRequest() || undefined)
  }

  private sendStatusNotificationRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.send(this.props.css?.sendStatusNotificationRequest() || undefined)
  }

  private sendNotifyEventRequest_LockFailure(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault()
    this.send(this.props.css?.sendNotifyEventRequest_LockFailure() || undefined)
  }
}

export default ChargingStationComp
