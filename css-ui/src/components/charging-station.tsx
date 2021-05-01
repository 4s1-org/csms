import React from 'react'
import { ChargingStation } from '@yellowgarbagebag/css-lib'
import {
  AuthorizeRequestDto,
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStationDto,
  ConnectorStatusEnum,
  HeartbeatRequestDto,
  IdTokenDto,
  IdTokenEnum,
  NotifyReportRequestDto,
  StatusNotificationRequestDto,
  TransactionDto,
  TransactionEventEnum,
  TransactionEventRequestDto,
  TriggerReasonEnum,
} from '@yellowgarbagebag/ocpp-lib'
import Simulation1 from './simulation1'

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
    this.sendAuthorizationRequest_PinCode = this.sendAuthorizationRequest_PinCode.bind(this)
    this.sendAuthorizationRequest_Rfid = this.sendAuthorizationRequest_Rfid.bind(this)
    this.sendStatusNotificationRequest = this.sendStatusNotificationRequest.bind(this)
    this.sendMeterValueRequest = this.sendMeterValueRequest.bind(this)
    this.sendNotifyReportRequest = this.sendNotifyReportRequest.bind(this)
    this.sendTransactionEventRequest = this.sendTransactionEventRequest.bind(this)
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
          &nspb;
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
          <button type="button" onClick={this.sendNotifyReportRequest} disabled={!this.props.isConnected}>
            Send NotifyReport
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendTransactionEventRequest} disabled={!this.props.isConnected}>
            Send TransactionEvent
          </button>
        </li>
        <li className="list-group-item">{this.props.cs && <Simulation1 cs={this.props.cs}></Simulation1>}</li>
      </ul>
    )
  }

  private async sendBootNotificationRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    const payload = new BootNotificationRequestDto(new ChargingStationDto('SimulatorX', 'CSS-UI'), BootReasonEnum.PowerUp)
    await this.props.cs?.sendBootNotificationRequest(payload)
  }

  private async sendHeartbeatRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendHeartbeatRequest(new HeartbeatRequestDto())
  }

  private async sendAuthorizationRequest_PinCode(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendAuthorizationRequest(new AuthorizeRequestDto(new IdTokenDto('234', IdTokenEnum.KeyCode)))
  }

  private async sendAuthorizationRequest_Rfid(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendAuthorizationRequest(new AuthorizeRequestDto(new IdTokenDto('bbb', IdTokenEnum.ISO14443)))
  }

  private async sendMeterValueRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    // ToDo
    //await this.props.cs?.sendMeterValueRequest()
  }

  private async sendStatusNotificationRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendStatusNotificationRequest(
      new StatusNotificationRequestDto(this.props.cs?.currentTime, ConnectorStatusEnum.Available, 1, 1),
    )
    await this.props.cs?.sendStatusNotificationRequest(
      new StatusNotificationRequestDto(this.props.cs?.currentTime, ConnectorStatusEnum.Available, 2, 1),
    )
  }

  private async sendNotifyReportRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    const payload = new NotifyReportRequestDto(1, this.props.cs?.currentTime || '', 34)
    await this.props.cs?.sendNotifyReportRequest(payload)
  }

  private async sendTransactionEventRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    const payload = new TransactionEventRequestDto(
      TransactionEventEnum.Started,
      this.props.cs?.currentTime!,
      TriggerReasonEnum.CablePluggedIn,
      1,
      new TransactionDto('x'),
    )
    await this.props.cs?.sendTransactionEventRequest(payload)
  }
}

export default ChargingStationComp
