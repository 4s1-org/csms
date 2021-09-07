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
  IdTokenDto,
  IdTokenEnum,
  ReasonEnum,
} from '@4s1/ocpp-lib'
import { SimulationBase } from './../simulation-base'

export class TransactionE01S3 extends SimulationBase {
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

    // User provides identification

    {
      const payload = new AuthorizeRequestDto(this.idToken)
      await this.cs.sendAuthorize(payload)
      await sleep(100)
    }

    {
      const transaction = new TransactionDto('foobar')
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Started,
        this.cs.currentTime,
        TriggerReasonEnum.Authorized,
        this.seqNo,
        transaction,
      )
      await this.cs.sendTransactionEvent(payload)
      await sleep(100)
    }

    {
      const transaction = new TransactionDto('foobar')
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Started,
        this.cs.currentTime,
        TriggerReasonEnum.Authorized,
        this.seqNo,
        transaction,
      )
      payload.idToken = new IdTokenDto('invalid', IdTokenEnum.ISO14443)
      const res = await this.cs.sendTransactionEvent(payload)
      if (res.idTokenInfo.status === AuthorizationStatusEnum.Accepted) {
        throw new Error('Should not accepted')
      }
      await sleep(100)
    }

    {
      const transaction = new TransactionDto('foobar')
      transaction.stoppedReason = ReasonEnum.DeAuthorized
      const payload = new TransactionEventRequestDto(
        TransactionEventEnum.Ended,
        this.cs.currentTime,
        TriggerReasonEnum.Deauthorized,
        this.seqNo,
        transaction,
      )
      await this.cs.sendTransactionEvent(payload)
      await sleep(100)
    }

    this.client.disconnect()
  }
}
