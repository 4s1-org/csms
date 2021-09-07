import { sleep } from '@4s1/common-lib'
import {
  AuthorizeRequestDto,
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStateEnum,
  ChargingStationDto,
  ConnectorStatusEnum,
  EvseDto,
  HeartbeatRequestDto,
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
} from '@4s1/ocpp-lib'
import { SimulationBase } from './simulation-base'

/**
 *
 */
export class NormalLoadingScenario extends SimulationBase {
  public async simulate(): Promise<void> {
    let seqNo = 0
    const transactionId = `x${Date.now()}`
    const evseId = 2
    const connectorId = 1
    const idToken = new IdTokenDto('aaa', IdTokenEnum.ISO14443)
    let wattHours = Math.round((Date.now() - 1619091965663) / 1000)

    await this.connect()
    await sleep(100)

    // B01 - Cold Boot Charging Station
    // Verfügbarkeit der Ladesäule signalisieren
    await this.cs.sendBootNotification(
      new BootNotificationRequestDto(new ChargingStationDto('Simulator1', 'CSS-CLI'), BootReasonEnum.PowerUp),
    )
    await sleep(100)

    // G01 - Status Notification
    // n-Connectoren anmelden
    await this.cs.sendStatusNotification(new StatusNotificationRequestDto(this.cs.currentTime, ConnectorStatusEnum.Available, 1, 1))
    await sleep(200)
    await this.cs.sendStatusNotification(new StatusNotificationRequestDto(this.cs.currentTime, ConnectorStatusEnum.Available, 2, 1))
    await sleep(200)
    await this.cs.sendStatusNotification(new StatusNotificationRequestDto(this.cs.currentTime, ConnectorStatusEnum.Available, 3, 1))
    await sleep(200)

    // Aktuelle Zählerstande mitteilen (ist nicht vorgegeben)
    {
      const sampleValue = new SampledValueDto(0)
      const meterValue = new MeterValueDto([sampleValue], this.cs.currentTime)
      const payload = new MeterValuesRequestDto(1, [meterValue])
      await this.cs.sendMeterValue(payload)
      await sleep(150)
    }

    {
      const sampleValue = new SampledValueDto(wattHours)
      const meterValue = new MeterValueDto([sampleValue], this.cs.currentTime)
      const payload = new MeterValuesRequestDto(2, [meterValue])
      await this.cs.sendMeterValue(payload)
      await sleep(150)
    }

    {
      const sampleValue = new SampledValueDto(0)
      const meterValue = new MeterValueDto([sampleValue], this.cs.currentTime)
      const payload = new MeterValuesRequestDto(3, [meterValue])
      await this.cs.sendMeterValue(payload)
      await sleep(150)
    }

    // G02 - Heartbeat
    // Heartbeat regelmässig senden
    const immediateObj = setInterval(async () => {
      await this.cs.sendHeartbeat(new HeartbeatRequestDto())
    }, this.cs.heartbeatInterval * 2000)
    await sleep(300)

    // -- Kabel wird vom Fahrer gesteckt --
    // E02 - Start Transaction - Cable Plugin First

    // StatusNotificationRequest(Occupied)
    await this.cs.sendStatusNotification(
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
      await this.cs.sendTransactionEvent(payload)
      await sleep(1000)
    }

    // C01 - EV Driver Authorization using RFID
    // Authorisierung
    {
      const payload = new AuthorizeRequestDto(idToken)
      await this.cs.sendAuthorize(payload)
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
      await sleep(500)
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
      await this.cs.sendTransactionEvent(payload)
      await sleep(200)

      wattHours += 1574
      payload.seqNo = ++seqNo
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await this.cs.sendTransactionEvent(payload)
      await sleep(200)

      wattHours += 3132
      payload.seqNo = ++seqNo
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await this.cs.sendTransactionEvent(payload)
      await sleep(200)

      wattHours += 3215
      payload.seqNo = ++seqNo
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await this.cs.sendTransactionEvent(payload)
      await sleep(200)

      wattHours += 1672
      payload.seqNo = ++seqNo
      payload.meterValue = [new MeterValueDto([new SampledValueDto(wattHours)], this.cs.currentTime)]
      await this.cs.sendTransactionEvent(payload)
      await sleep(200)

      wattHours += 963
    }

    // -- Fahrer möchte weiter fahren und hält die RFID Karte erneut vor den Leser --

    // E07 - Transaction locally stopped by IdToken

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
      await this.cs.sendTransactionEvent(payload)
      await sleep(200)
    }

    // -- Kabel wird vom Fahrer entfernt --

    // StatusNotificationRequest(Available)
    await this.cs.sendStatusNotification(
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
      await this.cs.sendTransactionEvent(payload)
      await sleep(200)
    }

    await sleep(10000)
    clearInterval(immediateObj)
    this.client.disconnect()
  }
}

new NormalLoadingScenario().simulate()
