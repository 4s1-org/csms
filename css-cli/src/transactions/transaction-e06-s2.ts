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
  ChargingStateEnum,
  ReasonEnum,
} from '@4s1/ocpp-lib'
import { SimulationBase } from './../simulation-base'

export class TransactionE06S2 extends SimulationBase {
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

    // Charging cable plugged in

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
      await this.cs.sendTransactionEvent(payload)
      await sleep(100)
    }

    // -----

    // unplug charging cable

    {
      const transaction = new TransactionDto('foobar')
      transaction.chargingState = ChargingStateEnum.Idle
      transaction.stoppedReason = ReasonEnum.EVDisconnected
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Ended,
        this.cs.currentTime,
        TriggerReasonEnum.EVCommunicationLost,
        this.seqNo,
        transaction,
      )
      await this.cs.sendTransactionEvent(payload)
      await sleep(100)
    }

    this.client.disconnect()
  }
}
