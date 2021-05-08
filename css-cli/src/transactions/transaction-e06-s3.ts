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
} from '@yellowgarbagebag/ocpp-lib'
import { SimulationBase } from './../simulation-base'

export class TransactionE06S3 extends SimulationBase {
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
      const res = await this.cs.sendAuthorize(payload)
      if (res.idTokenInfo.status !== AuthorizationStatusEnum.Accepted) {
        throw new Error('')
      }
      await sleep(100)
    }

    // -----

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

    this.client.disconnect()
  }
}
