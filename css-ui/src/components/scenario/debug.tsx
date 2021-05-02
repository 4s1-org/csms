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
  MeterValuesRequestDto,
  NotifyEventRequestDto,
  NotifyReportRequestDto,
  StatusNotificationRequestDto,
  TransactionDto,
  TransactionEventEnum,
  TransactionEventRequestDto,
  TriggerReasonEnum,
} from '@yellowgarbagebag/ocpp-lib'

interface IState {
  bootNotification_model: string
  bootNotification_vendorName: string
  bootNotification_reason: BootReasonEnum
  authorize_idToken: string
  authorize_type: IdTokenEnum
  statusNotification_connectorStatus: ConnectorStatusEnum
  statusNotification_evseId: number
}

interface IProps {
  cs: ChargingStation
}

class DebugComp extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      bootNotification_model: 'SimulatorX',
      bootNotification_vendorName: 'CSS-UI',
      bootNotification_reason: BootReasonEnum.PowerUp,
      authorize_idToken: 'aaa',
      authorize_type: IdTokenEnum.ISO15693,
      statusNotification_connectorStatus: ConnectorStatusEnum.Available,
      statusNotification_evseId: 1,
    }

    this.sendBootNotification = this.sendBootNotification.bind(this)
    this.sendHeartbeat = this.sendHeartbeat.bind(this)
    this.sendAuthorize = this.sendAuthorize.bind(this)
    this.sendStatusNotification = this.sendStatusNotification.bind(this)
    this.sendMeterValue = this.sendMeterValue.bind(this)
    this.sendNotifyReport = this.sendNotifyReport.bind(this)
    this.sendTransactionEvent = this.sendTransactionEvent.bind(this)
    this.sendNotifyEvent = this.sendNotifyEvent.bind(this)
  }

  public render(): JSX.Element {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <button type="button" onClick={this.sendBootNotification}>
            Send BootNotification
          </button>
          &nbsp; Model: &nbsp;
          <input
            type="text"
            placeholder="model"
            value={this.state.bootNotification_model}
            onChange={(e) => this.setState({ bootNotification_model: e.target.value })}
          ></input>
          &nbsp; VendorName: &nbsp;
          <input
            type="text"
            placeholder="model"
            value={this.state.bootNotification_vendorName}
            onChange={(e) => this.setState({ bootNotification_vendorName: e.target.value })}
          ></input>
          &nbsp; Reason: &nbsp;
          <select
            value={this.state.bootNotification_reason}
            onChange={(e) => this.setState({ bootNotification_reason: e.target.value as BootReasonEnum })}
          >
            {Object.keys(BootReasonEnum).map((key) => (
              <option key={key} value={(BootReasonEnum as { [index: string]: string })[key]}>
                {(BootReasonEnum as { [index: string]: string })[key]}
              </option>
            ))}
          </select>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendHeartbeat}>
            Send Heartbeat
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendStatusNotification}>
            Send StatusNotification
          </button>
          &nbsp; ConnectorStatus: &nbsp;
          <select
            value={this.state.statusNotification_connectorStatus}
            onChange={(e) => this.setState({ statusNotification_connectorStatus: e.target.value as ConnectorStatusEnum })}
          >
            {Object.keys(ConnectorStatusEnum).map((key) => (
              <option key={key} value={(ConnectorStatusEnum as { [index: string]: string })[key]}>
                {(ConnectorStatusEnum as { [index: string]: string })[key]}
              </option>
            ))}
          </select>
          &nbsp; EvseId: &nbsp;
          <select
            value={this.state.statusNotification_evseId}
            onChange={(e) => this.setState({ statusNotification_evseId: +e.target.value })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendAuthorize}>
            Send Authorize (with Pin Code)
          </button>
          &nbsp; IdToken: &nbsp;
          <input
            type="text"
            placeholder="model"
            value={this.state.authorize_idToken}
            onChange={(e) => this.setState({ authorize_idToken: e.target.value })}
          ></input>
          &nbsp; Type: &nbsp;
          <select value={this.state.authorize_type} onChange={(e) => this.setState({ authorize_type: e.target.value as IdTokenEnum })}>
            {Object.keys(IdTokenEnum).map((key) => (
              <option key={key} value={(IdTokenEnum as { [index: string]: string })[key]}>
                {(IdTokenEnum as { [index: string]: string })[key]}
              </option>
            ))}
          </select>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendMeterValue}>
            Send MeterValue
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendNotifyReport}>
            Send NotifyReport
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendNotifyEvent}>
            Send NotifyEvent
          </button>
        </li>
        <li className="list-group-item">
          <button type="button" onClick={this.sendTransactionEvent}>
            Send TransactionEvent
          </button>
        </li>
      </ul>
    )
  }

  private async sendBootNotification(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    const payload = new BootNotificationRequestDto(
      new ChargingStationDto(this.state.bootNotification_model, this.state.bootNotification_vendorName),
      this.state.bootNotification_reason,
    )
    await this.props.cs.sendBootNotification(payload)
  }

  private async sendHeartbeat(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs.sendHeartbeat(new HeartbeatRequestDto())
  }

  private async sendAuthorize(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs.sendAuthorize(new AuthorizeRequestDto(new IdTokenDto(this.state.authorize_idToken, this.state.authorize_type)))
  }

  private async sendMeterValue(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    const payload = new MeterValuesRequestDto(1, [])
    await this.props.cs.sendMeterValue(payload)
  }

  private async sendStatusNotification(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs.sendStatusNotification(
      new StatusNotificationRequestDto(
        this.props.cs.currentTime,
        this.state.statusNotification_connectorStatus,
        this.state.statusNotification_evseId,
        1,
      ),
    )
  }

  private async sendNotifyReport(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    const payload = new NotifyReportRequestDto(1, this.props.cs.currentTime, 34)
    await this.props.cs.sendNotifyReport(payload)
  }

  private async sendNotifyEvent(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    const payload = new NotifyEventRequestDto(this.props.cs.currentTime, 1, [])
    await this.props.cs.sendNotifyEvent(payload)
  }

  private async sendTransactionEvent(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    const payload = new TransactionEventRequestDto(
      TransactionEventEnum.Started,
      this.props.cs.currentTime,
      TriggerReasonEnum.CablePluggedIn,
      1,
      new TransactionDto('x'),
    )
    await this.props.cs.sendTransactionEvent(payload)
  }
}

export default DebugComp
