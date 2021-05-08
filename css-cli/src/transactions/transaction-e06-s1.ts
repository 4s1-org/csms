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
  ReasonEnum,
} from '@yellowgarbagebag/ocpp-lib'
import { SimulationBase } from './../simulation-base'

export class TransactionE06S1 extends SimulationBase {
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

    // Parking bay detector triggers

    await this.cs.sendTransactionEvent(
      new TransactionEventRequestDto(
        TransactionEventEnum.Started,
        this.cs.currentTime,
        TriggerReasonEnum.EVDetected,
        this.seqNo,
        new TransactionDto('foobar'),
      ),
    )
    await sleep(100)

    // -----

    // Parking bay detector no longer detects the EV

    const transaction = new TransactionDto('foobar')
    transaction.stoppedReason = ReasonEnum.Local
    const payload = new TransactionEventRequestDto(
      TransactionEventEnum.Ended,
      this.cs.currentTime,
      TriggerReasonEnum.EVDeparted,
      this.seqNo,
      transaction,
    )

    await this.cs.sendTransactionEvent(payload)
    await sleep(100)

    this.client.disconnect()
  }
}
