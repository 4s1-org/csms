import { sleep } from '@yellowgarbagebag/common-lib'
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
  IdTokenDto,
  IdTokenEnum,
} from '@yellowgarbagebag/ocpp-lib'
import { SimulationBase } from './../simulation-base'

export class TransactionE04 extends SimulationBase {
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

    const invalidIdToken = new IdTokenDto('ajdfklja4t', IdTokenEnum.ISO14443)

    {
      const transaction = new TransactionDto('foobar')
      transaction.chargingState = ChargingStateEnum.EVConnected
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Started,
        this.cs.currentTime,
        TriggerReasonEnum.CablePluggedIn,
        this.seqNo,
        transaction,
      )
      payload.idToken = invalidIdToken
      const res = await this.cs.sendTransactionEvent(payload)
      if (!res.idTokenInfo || res.idTokenInfo.status === AuthorizationStatusEnum.Accepted) {
        throw new Error('Transaction should be blocked')
      }
      await sleep(100)
    }

    await sleep(1000)

    {
      const transaction = new TransactionDto('foobar')
      transaction.chargingState = ChargingStateEnum.SuspendedEVSE
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Updated,
        this.cs.currentTime,
        TriggerReasonEnum.Deauthorized,
        this.seqNo,
        transaction,
      )
      payload.idToken = invalidIdToken
      await this.cs.sendTransactionEvent(payload)
      await sleep(100)
    }

    this.client.disconnect()
  }
}
