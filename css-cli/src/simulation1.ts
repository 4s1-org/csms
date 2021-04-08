import { sleep } from '@yellowgarbagebag/common-lib'
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
  ReasonEnum,
  SampledValueDto,
  StatusNotificationRequestDto,
  TransactionDto,
  TransactionEventEnum,
  TransactionEventRequestDto,
  TriggerReasonEnum,
} from '@yellowgarbagebag/ocpp-lib'
import { SimulationBase } from './simulation-base'

class Simulation extends SimulationBase {
  constructor() {
    super()
  }

  public async simulate(): Promise<void> {
    await this.connect()

    // B01 - Cold Boot Charging Station
    // Verfügbarkeit der Ladesäule signalisieren
    await this.cs.sendBootNotificationRequest(
      new BootNotificationRequestDto(new ChargingStationDto('Simulator1', 'CSS-CLI'), BootReasonEnum.PowerUp),
    )
    await sleep(1000)

    // G01 - Status Notification
    // n-Connectoren anmelden
    await this.cs.sendStatusNotificationRequest(
      new StatusNotificationRequestDto(this.cs.currentTime, ConnectorStatusEnum.Available, 1, 1),
    )
    await sleep(200)
    await this.cs.sendStatusNotificationRequest(
      new StatusNotificationRequestDto(this.cs.currentTime, ConnectorStatusEnum.Available, 2, 1),
    )
    await sleep(200)
    await this.cs.sendStatusNotificationRequest(
      new StatusNotificationRequestDto(this.cs.currentTime, ConnectorStatusEnum.Available, 3, 1),
    )
    await sleep(200)

    // G02 - Heartbeat
    // Heartbeat regelmässig senden
    const immediateObj = setInterval(async () => {
      await this.cs.sendHeartbeatRequest()
    }, this.cs.heartbeatInterval * 1000)
    await sleep(3000)

    // -- Los gehts --

    let seqNo = 0
    const transactionId = `x${Date.now()}`
    const evseId = 2
    const connectorId = 1
    const idToken = new IdTokenDto('aaa', IdTokenEnum.ISO14443)
    let wattHours = Date.now() - 1617886310013

    // -- Kabel wird vom Fahrer gesteckt --
    // E02 - Start Transaction - Cable Plugin First

    // StatusNotificationRequest(Occupied)
    await this.cs.sendStatusNotificationRequest(
      new StatusNotificationRequestDto(this.cs.currentTime, ConnectorStatusEnum.Occupied, evseId, connectorId),
    )
    await sleep(500)

    // TransactionEventRequest(
    //   eventType = Started,
    //   triggerReason = CablePluggedIn,
    //   chargingState = EVConnected,
    //   transactionId = AB1234,
    //   timestamp,
    //   evse.id = 1,
    //   evse.connectorId = 1,
    //   meterValues,
    //   ...
    // )
    {
      const transaction = new TransactionDto(transactionId)
      transaction.chargingState = ChargingStateEnum.EVConnected
      const evse = new EvseDto(evseId)
      evse.connectorId = connectorId
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Started,
        this.cs.currentTime,
        TriggerReasonEnum.CablePluggedIn,
        ++seqNo,
        transaction,
      )
      payload.evse = evse
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await this.cs.sendTransactionEventRequest(payload)
      await sleep(5000)
    }

    // C01 - EV Driver Authorization using RFID
    // Authorisierung
    {
      const payload = new AuthorizeRequestDto(idToken)
      await this.cs.sendAuthorizationRequest(payload)
      await sleep(500)
    }

    // weiter mit E02 - Start Transaction - Cable Plugin First
    // TransactionEventRequest(
    //   eventType = Updated,
    //   transactionId = AB1234,
    //   idToken.id = 1234,
    //   timestamp,
    //   triggerReason = Authorized,
    //   meterValues,
    //   ...
    // )
    {
      const transaction = new TransactionDto(transactionId)
      transaction.chargingState = ChargingStateEnum.EVConnected
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Updated,
        this.cs.currentTime,
        TriggerReasonEnum.Authorized,
        ++seqNo,
        transaction,
      )
      payload.idToken = idToken
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await sleep(2000)
    }

    // -- Kabel wird gesperrt (lock) --

    // -- Energie wird übertragen --

    // Regelmässig die Verbrauchswerte melden
    // TransactionEventRequest(
    //   eventType = Updated,
    //   transactionId = AB1234,
    //   idToken.id = 1234,
    //   timestamp,
    //   chargingState = Charging,
    //   triggerReason = ChargingStateChanged,
    //   meterValues,
    //   ...
    // )
    {
      const transaction = new TransactionDto(transactionId)
      transaction.chargingState = ChargingStateEnum.Charging
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Updated,
        this.cs.currentTime,
        TriggerReasonEnum.ChargingStateChanged,
        seqNo,
        transaction,
      )

      wattHours += 1212
      payload.seqNo = ++seqNo
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await this.cs.sendTransactionEventRequest(payload)
      await sleep(2000)

      wattHours += 1574
      payload.seqNo = ++seqNo
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await this.cs.sendTransactionEventRequest(payload)
      await sleep(2000)

      wattHours += 3132
      payload.seqNo = ++seqNo
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await this.cs.sendTransactionEventRequest(payload)
      await sleep(2000)

      wattHours += 3215
      payload.seqNo = ++seqNo
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await this.cs.sendTransactionEventRequest(payload)
      await sleep(2000)

      wattHours += 1672
      payload.seqNo = ++seqNo
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await this.cs.sendTransactionEventRequest(payload)
      await sleep(2000)

      wattHours += 963
    }

    // -- Fahrer möchte weiter fahren und hält die RFID Karte erneut vor den Leser --

    // E07 - Transaction locally stopped by IdToken
    // C01 - EV Driver Authorization using RFID
    // Authorisierung
    {
      const payload = new AuthorizeRequestDto(idToken)
      await this.cs.sendAuthorizationRequest(payload)
      await sleep(200)
    }

    // -- Kabel kann entfernt werden (unlock) --

    // Beenden des Ladevorgangs melden
    // TransactionEventRequest(
    //   eventType = Updated,
    //   transactionId = AB1234,
    //   seqNo = N + 1,
    //   timestamp,
    //   chargingState = EVConnected,
    //   triggerReason = StopAuthorized,
    //   idToken.id = 1234,
    //   meterValues
    // )
    {
      const transaction = new TransactionDto(transactionId)
      transaction.chargingState = ChargingStateEnum.EVConnected
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Updated,
        this.cs.currentTime,
        TriggerReasonEnum.StopAuthorized,
        ++seqNo,
        transaction,
      )
      payload.idToken = idToken
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await this.cs.sendTransactionEventRequest(payload)
      await sleep(200)
    }

    // -- Kabel wird vom Fahrer entfernt --

    // StatusNotificationRequest(Available)
    await this.cs.sendStatusNotificationRequest(
      new StatusNotificationRequestDto(this.cs.currentTime, ConnectorStatusEnum.Available, evseId, connectorId),
    )

    // TransactionEventRequest(
    //   eventType = Ended,
    //   chargingState = Idle,
    //   triggerReason = EVCommunicationLost,
    //   stoppedReason = EVDisconnected,
    //   transactionId = AB1234,
    //   seqNo = N + 2,
    //   timestamp,
    //   meterValues
    // )
    {
      const transaction = new TransactionDto(transactionId)
      transaction.chargingState = ChargingStateEnum.Idle
      transaction.stoppedReason = ReasonEnum.EVDisconnected
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Ended,
        this.cs.currentTime,
        TriggerReasonEnum.EVCommunicationLost,
        ++seqNo,
        transaction,
      )
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await this.cs.sendTransactionEventRequest(payload)
      await sleep(2000)
    }

    await sleep(10000)
    clearInterval(immediateObj)
    this.client.disconnect()
  }
}

new Simulation().simulate()
