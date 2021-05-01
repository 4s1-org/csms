import React from 'react'
import { ChargingStation } from '@yellowgarbagebag/css-lib'
import {
  AuthorizeRequestDto,
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStateEnum,
  ChargingStationDto,
  ConnectorStatusEnum,
  EvseDto,
  IdTokenDto,
  IdTokenEnum,
  MeterValueDto,
  MeterValuesRequestDto,
  ReasonEnum,
  SampledValueDto,
  StatusNotificationRequestDto,
  TransactionDto,
  TransactionEventEnum,
  TransactionEventRequestDto,
  TriggerReasonEnum,
} from '@yellowgarbagebag/ocpp-lib'

interface IState {
  seqNo: number
  transactionId: string
  evseId: number
  connectorId: number
  idToken: IdTokenDto
  wattHours: number
}

interface IProps {
  cs: ChargingStation
}

class Simulation1 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      seqNo: 0,
      transactionId: `x${Date.now()}`,
      evseId: 2,
      connectorId: 1,
      idToken: new IdTokenDto('aaa', IdTokenEnum.ISO14443),
      wattHours: Date.now() - 1617886310013,
    }

    this.sendMsg1 = this.sendMsg1.bind(this)
    this.sendMsg2 = this.sendMsg2.bind(this)
    this.sendMsg3 = this.sendMsg3.bind(this)
    this.sendMsg4 = this.sendMsg4.bind(this)
    this.sendMsg5 = this.sendMsg5.bind(this)
    this.sendMsg6 = this.sendMsg6.bind(this)
    this.sendMsg7 = this.sendMsg7.bind(this)
    this.sendMsg8 = this.sendMsg8.bind(this)
    this.sendMsg9 = this.sendMsg9.bind(this)
    this.sendMsg10 = this.sendMsg10.bind(this)
    this.sendMsg11 = this.sendMsg11.bind(this)
    this.sendMsg12 = this.sendMsg12.bind(this)
    this.sendMsg16 = this.sendMsg16.bind(this)
    this.sendMsg17 = this.sendMsg17.bind(this)
    this.sendMsg18 = this.sendMsg18.bind(this)
  }

  public render(): JSX.Element {
    return (
      <div>
        <p>
          <b>Simulation 1</b>
        </p>

        <ul className="list-group">
          <li className="list-group-item">
            <button type="button" onClick={this.sendMsg1}>
              Verfügbarkeit der Ladesäule signalisieren
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" onClick={this.sendMsg2}>
              EVSE 1 anmelden
            </button>
            &nbsp;
            <button type="button" onClick={this.sendMsg3}>
              EVSE 2 anmelden
            </button>
            &nbsp;
            <button type="button" onClick={this.sendMsg4}>
              EVSE 3 anmelden
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" onClick={this.sendMsg5}>
              Zählerstand 1 melden
            </button>
            &nbsp;
            <button type="button" onClick={this.sendMsg6}>
              Zählerstand 2 melden
            </button>
            &nbsp;
            <button type="button" onClick={this.sendMsg7}>
              Zählerstand 3 melden
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" onClick={this.sendMsg8}>
              Kabel wird vom Fahrer gesteckt
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" onClick={this.sendMsg9}>
              Transaktion starten
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" onClick={this.sendMsg10}>
              Authorisierung
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" onClick={this.sendMsg11}>
              Zählerstand melden
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" onClick={this.sendMsg12}>
              Tanken x-mal
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" onClick={this.sendMsg16}>
              Transaktion beenden
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" onClick={this.sendMsg17}>
              Kabel wird vom Fahrer entfernt
            </button>
          </li>
          <li className="list-group-item">
            <button type="button" onClick={this.sendMsg18}>
              Ladepunkt ist wieder verfügbar
            </button>
          </li>
        </ul>
      </div>
    )
  }

  private async sendMsg1(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    const payload = new BootNotificationRequestDto(new ChargingStationDto('SimulatorX', 'CSS-UI'), BootReasonEnum.PowerUp)
    await this.props.cs?.sendBootNotification(payload)
  }

  private async sendMsg2(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs.sendStatusNotification(
      new StatusNotificationRequestDto(this.props.cs.currentTime, ConnectorStatusEnum.Available, 1, 1),
    )
  }

  private async sendMsg3(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs.sendStatusNotification(
      new StatusNotificationRequestDto(this.props.cs.currentTime, ConnectorStatusEnum.Available, 2, 1),
    )
  }

  private async sendMsg4(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs.sendStatusNotification(
      new StatusNotificationRequestDto(this.props.cs.currentTime, ConnectorStatusEnum.Available, 3, 1),
    )
  }

  private async sendMsg5(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    const sampleValue = new SampledValueDto(10)
    const meterValue = new MeterValueDto([sampleValue], this.props.cs.currentTime)
    const payload = new MeterValuesRequestDto(1, [meterValue])
    await this.props.cs.sendMeterValue(payload)
  }

  private async sendMsg6(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    const sampleValue = new SampledValueDto(this.state.wattHours)
    const meterValue = new MeterValueDto([sampleValue], this.props.cs.currentTime)
    const payload = new MeterValuesRequestDto(2, [meterValue])
    await this.props.cs.sendMeterValue(payload)
  }

  private async sendMsg7(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    const sampleValue = new SampledValueDto(20)
    const meterValue = new MeterValueDto([sampleValue], this.props.cs.currentTime)
    const payload = new MeterValuesRequestDto(3, [meterValue])
    await this.props.cs.sendMeterValue(payload)
  }

  private async sendMsg8(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()
    await this.props.cs.sendStatusNotification(
      new StatusNotificationRequestDto(this.props.cs.currentTime, ConnectorStatusEnum.Occupied, this.state.evseId, this.state.connectorId),
    )
  }

  private async sendMsg9(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    this.setState({
      ...this.state,
      seqNo: this.state.seqNo + 1,
    })

    const transaction = new TransactionDto(this.state.transactionId)
    transaction.chargingState = ChargingStateEnum.EVConnected
    const evse = new EvseDto(this.state.evseId)
    evse.connectorId = this.state.connectorId
    const payload = new TransactionEventRequestDto(
      TransactionEventEnum.Started,
      this.props.cs.currentTime,
      TriggerReasonEnum.CablePluggedIn,
      this.state.seqNo,
      transaction,
    )
    payload.evse = evse
    payload.meterValue = [new MeterValueDto([new SampledValueDto(this.state.wattHours)], this.props.cs.currentTime)]
    await this.props.cs.sendTransactionEvent(payload)
  }

  private async sendMsg10(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    const payload = new AuthorizeRequestDto(this.state.idToken)
    await this.props.cs.sendAuthorization(payload)
  }

  private async sendMsg11(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    this.setState({
      ...this.state,
      seqNo: this.state.seqNo + 1,
    })

    const transaction = new TransactionDto(this.state.transactionId)
    transaction.chargingState = ChargingStateEnum.EVConnected
    const payload = new TransactionEventRequestDto(
      TransactionEventEnum.Updated,
      this.props.cs.currentTime,
      TriggerReasonEnum.Authorized,
      this.state.seqNo,
      transaction,
    )
    payload.idToken = this.state.idToken
    payload.meterValue = [new MeterValueDto([new SampledValueDto(this.state.wattHours)], this.props.cs.currentTime)]
  }

  private async sendMsg12(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    this.setState({
      ...this.state,
      seqNo: this.state.seqNo + 1,
      wattHours: this.state.wattHours + 1235,
    })

    const transaction = new TransactionDto(this.state.transactionId)
    transaction.chargingState = ChargingStateEnum.Charging
    const payload = new TransactionEventRequestDto(
      TransactionEventEnum.Updated,
      this.props.cs.currentTime,
      TriggerReasonEnum.ChargingStateChanged,
      this.state.seqNo,
      transaction,
    )

    payload.seqNo = this.state.seqNo
    payload.meterValue = [new MeterValueDto([new SampledValueDto(this.state.wattHours)], this.props.cs.currentTime)]
    await this.props.cs.sendTransactionEvent(payload)
  }

  private async sendMsg16(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    this.setState({
      ...this.state,
      seqNo: this.state.seqNo + 1,
    })

    const transaction = new TransactionDto(this.state.transactionId)
    transaction.chargingState = ChargingStateEnum.EVConnected
    const payload = new TransactionEventRequestDto(
      TransactionEventEnum.Updated,
      this.props.cs.currentTime,
      TriggerReasonEnum.StopAuthorized,
      this.state.seqNo,
      transaction,
    )
    payload.idToken = this.state.idToken
    payload.meterValue = [new MeterValueDto([new SampledValueDto(this.state.wattHours)], this.props.cs.currentTime)]
    await this.props.cs.sendTransactionEvent(payload)
  }

  private async sendMsg17(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    await this.props.cs.sendStatusNotification(
      new StatusNotificationRequestDto(this.props.cs.currentTime, ConnectorStatusEnum.Available, this.state.evseId, this.state.connectorId),
    )
  }

  private async sendMsg18(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    e.preventDefault()

    this.setState({
      ...this.state,
      seqNo: this.state.seqNo + 1,
    })

    const transaction = new TransactionDto(this.state.transactionId)
    transaction.chargingState = ChargingStateEnum.Idle
    transaction.stoppedReason = ReasonEnum.EVDisconnected
    const payload = new TransactionEventRequestDto(
      TransactionEventEnum.Ended,
      this.props.cs.currentTime,
      TriggerReasonEnum.EVCommunicationLost,
      this.state.seqNo,
      transaction,
    )
    payload.meterValue = [new MeterValueDto([new SampledValueDto(this.state.wattHours)], this.props.cs.currentTime)]
    await this.props.cs.sendTransactionEvent(payload)
  }
}

export default Simulation1
