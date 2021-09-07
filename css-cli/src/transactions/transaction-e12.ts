import { sleep } from '@4s1/common-lib'
import {
  ConnectorStatusEnum,
  BootNotificationRequestDto,
  BootReasonEnum,
  ChargingStationDto,
  StatusNotificationRequestDto,
  TransactionEventRequestDto,
  TransactionEventEnum,
  TriggerReasonEnum,
  TransactionDto,
  AuthorizeRequestDto,
  AuthorizationStatusEnum,
  ChargingStateEnum,
  MeterValueDto,
  SampledValueDto,
} from '@4s1/ocpp-lib'
import { SimulationBase } from './../simulation-base'

export class TransactionE12 extends SimulationBase {
  constructor() {
    super()
  }

  public async simulate(): Promise<void> {
    await this.connect()
    await sleep(100)

    await this.cs.sendBootNotification(
      new BootNotificationRequestDto(new ChargingStationDto('Transaction', 'CSS-CLI'), BootReasonEnum.PowerUp),
    )
    await sleep(100)
    await this.cs.sendStatusNotification(new StatusNotificationRequestDto(this.cs.currentTime, ConnectorStatusEnum.Available, 1, 1))
    await sleep(100)

    {
      const payload = new AuthorizeRequestDto(this.idToken)
      const res = await this.cs.sendAuthorize(payload)
      if (res.idTokenInfo.status !== AuthorizationStatusEnum.Accepted) {
        throw new Error('')
      }
      await sleep(100)
    }

    // Plugin cable

    {
      const payload = new StatusNotificationRequestDto(this.cs.currentTime, ConnectorStatusEnum.Occupied, 1, 1)
      await this.cs.sendStatusNotification(payload)
      await sleep(100)
    }

    {
      const transaction = new TransactionDto('foobar')
      transaction.chargingState = ChargingStateEnum.EVConnected
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Updated,
        this.cs.currentTime,
        TriggerReasonEnum.CablePluggedIn,
        this.seqNo,
        transaction,
      )
      await this.cs.sendTransactionEvent(payload)
      await sleep(100)
    }

    {
      const transaction = new TransactionDto('foobar')
      transaction.chargingState = ChargingStateEnum.Charging
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Updated,
        this.cs.currentTime,
        TriggerReasonEnum.ChargingStateChanged,
        this.seqNo,
        transaction,
      )
      payload.meterValue = [new MeterValueDto([new SampledValueDto(500)], this.cs.currentTime)]
      payload.idToken = this.idToken
      await this.cs.sendTransactionEvent(payload)
      await sleep(100)
    }

    // -----

    // connection loss

    const transaction = new TransactionDto('foobar')

    const payload1 = new TransactionEventRequestDto(
      TransactionEventEnum.Updated,
      this.cs.currentTime,
      TriggerReasonEnum.ChargingStateChanged,
      this.seqNo,
      transaction,
    )
    payload1.meterValue = [new MeterValueDto([new SampledValueDto(500)], this.cs.currentTime)]

    const payload2 = new TransactionEventRequestDto(
      TransactionEventEnum.Updated,
      this.cs.currentTime,
      TriggerReasonEnum.ChargingStateChanged,
      this.seqNo,
      transaction,
    )
    payload2.meterValue = [new MeterValueDto([new SampledValueDto(1000)], this.cs.currentTime)]

    const payload3 = new TransactionEventRequestDto(
      TransactionEventEnum.Updated,
      this.cs.currentTime,
      TriggerReasonEnum.ChargingStateChanged,
      this.seqNo,
      transaction,
    )
    payload3.meterValue = [new MeterValueDto([new SampledValueDto(1500)], this.cs.currentTime)]

    // connection restored

    // send cached messages

    payload1.offline = true
    await this.cs.sendTransactionEvent(payload1)
    await sleep(100)

    payload2.offline = true
    await this.cs.sendTransactionEvent(payload2)
    await sleep(100)

    payload3.offline = true
    await this.cs.sendTransactionEvent(payload3)
    await sleep(100)

    // send normal messages

    const payload4 = new TransactionEventRequestDto(
      TransactionEventEnum.Updated,
      this.cs.currentTime,
      TriggerReasonEnum.ChargingStateChanged,
      this.seqNo,
      transaction,
    )
    payload4.meterValue = [new MeterValueDto([new SampledValueDto(1500)], this.cs.currentTime)]
    await this.cs.sendTransactionEvent(payload4)
    await sleep(100)

    this.client.disconnect()
  }
}
