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
} from '@yellowgarbagebag/ocpp-lib'
import { SimulationBase } from './../simulation-base'

export class TransactionE11 extends SimulationBase {
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

    // connection loss
    await sleep(1000)

    const payload1 = new TransactionEventRequestDto(
      TransactionEventEnum.Ended,
      this.cs.currentTime,
      TriggerReasonEnum.EVDeparted,
      this.seqNo,
      new TransactionDto('foobar'),
    )

    const payload2 = new TransactionEventRequestDto(
      TransactionEventEnum.Started,
      this.cs.currentTime,
      TriggerReasonEnum.EVDetected,
      this.seqNo,
      new TransactionDto('foobar'),
    )

    const payload3 = new TransactionEventRequestDto(
      TransactionEventEnum.Ended,
      this.cs.currentTime,
      TriggerReasonEnum.EVDeparted,
      this.seqNo,
      new TransactionDto('foobar'),
    )

    // connection restored

    // send cached messages

    payload1.offline = true
    await this.cs.sendTransactionEvent(payload1)
    await sleep(50)

    payload2.offline = true
    await this.cs.sendTransactionEvent(payload2)
    await sleep(50)

    payload3.offline = true
    await this.cs.sendTransactionEvent(payload3)
    await sleep(50)

    // send normal messages

    const payload4 = new TransactionEventRequestDto(
      TransactionEventEnum.Started,
      this.cs.currentTime,
      TriggerReasonEnum.EVDetected,
      this.seqNo,
      new TransactionDto('foobar'),
    )
    await this.cs.sendTransactionEvent(payload4)
    await sleep(100)

    this.client.disconnect()
  }
}
