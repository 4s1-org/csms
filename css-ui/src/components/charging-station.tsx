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

    this.sendBootNotification = this.sendBootNotification.bind(this)
    this.sendHeartbeat = this.sendHeartbeat.bind(this)
    this.sendAuthorize_PinCode = this.sendAuthorize_PinCode.bind(this)
    this.sendAuthorize_Rfid = this.sendAuthorize_Rfid.bind(this)
    this.sendStatusNotification = this.sendStatusNotification.bind(this)
    this.sendMeterValue = this.sendMeterValue.bind(this)
    this.sendNotifyReport = this.sendNotifyReport.bind(this)
    this.sendTransactionEvent = this.sendTransactionEvent.bind(this)
  }

  public render(): JSX.Element {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <button type="button" onClick={this.sendBootNotification} disabled={!this.props.isConnected}>
            Send BootNotification
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendHeartbeat} disabled={!this.props.isConnected}>
            Send Heartbeat
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendStatusNotification} disabled={!this.props.isConnected}>
            Send StatusNotification
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendAuthorize_PinCode} disabled={!this.props.isConnected}>
            Send Authorize (with Pin Code)
          </button>
          &nspb;
          <button type="button" onClick={this.sendAuthorize_Rfid} disabled={!this.props.isConnected}>
            Send Authorize (with RFID)
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendMeterValue} disabled={!this.props.isConnected}>
            Send MeterValue
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendNotifyReport} disabled={!this.props.isConnected}>
            Send NotifyReport
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendTransactionEvent} disabled={!this.props.isConnected}>
            Send TransactionEvent
          </button>
        </li>
        <li className="list-group-item">{this.props.cs && <Simulation1 cs={this.props.cs}></Simulation1>}</li>
      </ul>
    )
  }

  private async sendBootNotification(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    const payload = new BootNotificationRequestDto(new ChargingStationDto('SimulatorX', 'CSS-UI'), BootReasonEnum.PowerUp)
    await this.props.cs?.sendBootNotification(payload)
  }

  private async sendHeartbeat(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendHeartbeat(new HeartbeatRequestDto())
  }

  private async sendAuthorize_PinCode(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendAuthorize(new AuthorizeRequestDto(new IdTokenDto('234', IdTokenEnum.KeyCode)))
  }

  private async sendAuthorize_Rfid(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendAuthorize(new AuthorizeRequestDto(new IdTokenDto('bbb', IdTokenEnum.ISO14443)))
  }

  private async sendMeterValue(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    // ToDo
    //await this.props.cs?.sendMeterValue()
  }

  private async sendStatusNotification(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs?.sendStatusNotification(
      new StatusNotificationRequestDto(this.props.cs?.currentTime, ConnectorStatusEnum.Available, 1, 1),
    )
    await this.props.cs?.sendStatusNotification(
      new StatusNotificationRequestDto(this.props.cs?.currentTime, ConnectorStatusEnum.Available, 2, 1),
    )
  }

  private async sendNotifyReport(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    const payload = new NotifyReportRequestDto(1, this.props.cs?.currentTime || '', 34)
    await this.props.cs?.sendNotifyReport(payload)
  }

  private async sendTransactionEvent(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    const payload = new TransactionEventRequestDto(
      TransactionEventEnum.Started,
      this.props.cs?.currentTime!,
      TriggerReasonEnum.CablePluggedIn,
      1,
      new TransactionDto('x'),
    )
    await this.props.cs?.sendTransactionEvent(payload)
  }
}

export default ChargingStationComp
