import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  ResponseBaseDto,
  HeartbeatRequestDto,
  HeartbeatResponseDto,
  StatusNotificationRequestDto,
  StatusNotificationResponseDto,
  AuthorizeRequestDto,
  AuthorizeResponseDto,
  IdTokenEnum,
  MeterValuesRequestDto,
  MeterValuesResponseDto,
  SetVariablesRequestDto,
  SetVariablesResponseDto,
  ChangeAvailabilityRequestDto,
  ChangeAvailabilityResponseDto,
  AuthorizationStatusEnum,
  GetVariablesRequestDto,
  GetVariablesResponseDto,
  NotifyEventRequestDto,
  ComponentDto,
  VariableDto,
  NotifyEventResponseDto,
  RequestBaseDto,
  RegistrationStatusEnum,
  IdTokenInfoDto,
  SetVariableDataDto,
  OperationalStatusEnum,
  GetVariableDataDto,
  OcppActionEnum,
  IReceiveMessage,
  ISendMessage,
  GetBaseReportResponseDto,
  GetBaseReportRequestDto,
  ReportBaseEnum,
  NotifyReportRequestDto,
  NotifyReportResponseDto,
  ResetRequestDto,
  ResetEnum,
  ResetResponseDto,
  TransactionEventRequestDto,
  TransactionEventResponseDto,
  DataTransferResponseDto,
  DataTransferRequestDto,
  OcppErrorCodeEnum,
  CsmsError,
  ConnectorStatusEnum,
  ReadingContextEnum,
  SampledValueDto,
  LocationEnum,
  MeasurandEnum,
  TransactionEventEnum,
} from '@yellowgarbagebag/ocpp-lib'
import { Logger } from '@yellowgarbagebag/common-lib'
import { ChargingStationModel, ColorStateEnum, EvseModel, UserModel } from '@yellowgarbagebag/csms-lib'
import { ProcessEnv } from './process-env'

export class ChargingStation implements IReceiveMessage {
  public readonly logger = new Logger(this.model.uniqueIdentifier, ProcessEnv.LOG_LEVEL)
  public readonly heartbeatInterval = 3
  private transactions: { rfid: string | null; currentUser: UserModel | null; id: string; evseId: number }[] = []

  public constructor(
    public readonly model: ChargingStationModel,
    private readonly sendMessage: ISendMessage,
    private readonly users: UserModel[] = [],
  ) {
    // nothing to do
  }

  public get currentTime(): string {
    return new Date().toISOString()
  }

  public receive(payload: RequestBaseDto, action: OcppActionEnum): ResponseBaseDto {
    this.model.lastContact = Date.now()
    this.model.lastAction = action

    if (payload instanceof BootNotificationRequestDto) {
      return this.receiveBootNotificationRequest(payload)
    }
    if (payload instanceof HeartbeatRequestDto) {
      return this.receiveHeartbeatRequest(payload)
    }
    if (payload instanceof StatusNotificationRequestDto) {
      return this.receiveStatusNotificationRequest(payload)
    }
    if (payload instanceof AuthorizeRequestDto) {
      return this.receiveAuthorizeRequest(payload)
    }
    if (payload instanceof MeterValuesRequestDto) {
      return this.receiveMeterValuesRequest(payload)
    }
    if (payload instanceof NotifyEventRequestDto) {
      return this.receiveNotifyEventRequest(payload)
    }
    if (payload instanceof NotifyReportRequestDto) {
      return this.receiveNotifyReportRequest(payload)
    }
    if (payload instanceof TransactionEventRequestDto) {
      return this.receiveTransactionEventRequest(payload)
    }

    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  public connect(): void {
    this.logger.info('Connected')
    this.model.state = ColorStateEnum.Yellow
  }

  public disconnect(): void {
    this.logger.info('Disconnected')
    this.model.state = ColorStateEnum.Red
    for (const evse of this.model.evseList) {
      evse.state = ColorStateEnum.Red
      evse.currentUser = undefined
    }
  }

  /**
   * B05 - Set Variables
   */
  public async sendSetVariablesRequest(): Promise<SetVariablesResponseDto> {
    const payload = new SetVariablesRequestDto([
      new SetVariableDataDto('Foo', new ComponentDto('Test'), new VariableDto('yyy')),
      new SetVariableDataDto('Bar', new ComponentDto('Test'), new VariableDto('xxx')),
    ])
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * B07 - Get Base Report
   */
  public async sendGetBaseReportRequest(): Promise<GetBaseReportResponseDto> {
    const payload = new GetBaseReportRequestDto(1, ReportBaseEnum.SummaryInventory)
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * G03 - Change Availability EVSE/Connector
   * G04 - Change Availability Charging Station
   */
  public async sendChangeAvailabilityRequest(): Promise<ChangeAvailabilityResponseDto> {
    const payload = new ChangeAvailabilityRequestDto(OperationalStatusEnum.Operative)
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * B06 - Get Variables
   */
  public async sendGetVariablesRequest(): Promise<GetVariablesResponseDto> {
    const payload = new GetVariablesRequestDto([new GetVariableDataDto(new ComponentDto('test'), new VariableDto('foo'))])
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * B11 - Reset - Without Ongoing Transaction
   * B12 - Reset - With Ongoing Transaction
   */
  public async sendRequestResetRequest(): Promise<ResetResponseDto> {
    const payload = new ResetRequestDto(ResetEnum.Immediate)
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * P01 - Data Transfer to the Charging Station
   * P02 - Data Transfer to the CSMS
   */
  public async sendDataTransferRequest(): Promise<DataTransferResponseDto> {
    const payload = new DataTransferRequestDto('foobar')
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * B01 - Cold Boot Charging Station
   * B02 - Cold Boot Charging Station - Pending
   * B03 - Cold Boot Charging Station - Rejected
   */
  private receiveBootNotificationRequest(payload: BootNotificationRequestDto): BootNotificationResponseDto {
    this.model.state = ColorStateEnum.Green
    return new BootNotificationResponseDto(this.currentTime, this.heartbeatInterval, RegistrationStatusEnum.Accepted)
  }

  /**
   * G02 - Heartbeat
   * Mentioned in:
   * B01 - Cold Boot Charging Station
   * B04 - Offline Behavior Idle Charging Station
   * E12 - Inform CSMS of an Offline Occurred Transaction
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private receiveHeartbeatRequest(_payload: HeartbeatRequestDto): HeartbeatResponseDto {
    // Payload not required
    return new HeartbeatResponseDto(this.currentTime)
  }

  /**
   * J01 - Sending Meter Values not related to a transaction
   */
  private receiveMeterValuesRequest(payload: MeterValuesRequestDto): MeterValuesResponseDto {
    if (payload.meterValue) {
      for (const meterValue of payload.meterValue) {
        if (meterValue.sampledValue) {
          for (const sampledValue of meterValue.sampledValue) {
            this.setDefaultValuesForSampledValue(sampledValue)
            if (
              sampledValue.context === ReadingContextEnum['Sample.Periodic'] &&
              sampledValue.measurand === MeasurandEnum['Energy.Active.Import.Register']
            ) {
              const evse = this.model.evseList.find((x) => x.id === payload.evseId)
              if (evse) {
                evse.wattHours = sampledValue.value
              }
            }
          }
        }
      }
    }
    return new MeterValuesResponseDto()
  }

  /**
   * C01 - EV Driver Authorization using RFID
   * C02 - Authorization using a start button
   * C04 - Authorization using PIN-code
   */
  private receiveAuthorizeRequest(payload: AuthorizeRequestDto): AuthorizeResponseDto {
    if (payload.idToken.type === IdTokenEnum.KeyCode) {
      if (payload.idToken.idToken === '1234') {
        // C04.FR.02 - alles richtig
        return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Accepted))
      } else {
        // C04.FR.01 - PIN falsch
        return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Invalid))
      }
    } else if (payload.idToken.type === IdTokenEnum.ISO14443 || payload.idToken.type === IdTokenEnum.ISO15693) {
      const user = this.users.find((x) => x.rfid === payload.idToken.idToken)
      if (user) {
        const transaction = this.transactions.find((x) => !x.rfid)
        if (transaction) {
          transaction.rfid = user.rfid
          transaction.currentUser = user

          const evse = this.model.evseList.find((x) => x.id === transaction.evseId)
          if (evse) {
            evse.currentUser = transaction.currentUser
          }
        }
        return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Accepted))
      }
    }

    return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Invalid))
  }

  /**
   * G01 - Status Notification
   * Mentioned in:
   * B01 - Cold Boot Charging Station
   * B04 - Offline Behavior Idle Charging Station
   * C02 - Authorization using a start button
   * E02 - Start Transaction - Cable Plugin First
   * E03 - Start Transaction - IdToken First
   * E07 - Transaction locally stopped by IdToken
   * E09 - When cable disconnected on EV-side: Stop Transaction
   * E10 - When cable disconnected on EV-side: Suspend Transaction
   * E11 - Connection Loss During Transaction
   * E12 - Inform CSMS of an Offline Occurred Transaction
   * E13 - Transaction-related message not accepted by CSMS
   */
  private receiveStatusNotificationRequest(payload: StatusNotificationRequestDto): StatusNotificationResponseDto {
    let colorState: ColorStateEnum = ColorStateEnum.Unknown
    switch (payload.connectorStatus) {
      case ConnectorStatusEnum.Available:
        colorState = ColorStateEnum.Green
        break
      case ConnectorStatusEnum.Occupied:
      case ConnectorStatusEnum.Reserved:
        colorState = ColorStateEnum.Yellow
        break
      case ConnectorStatusEnum.Unavailable:
      case ConnectorStatusEnum.Faulted:
      default:
        colorState = ColorStateEnum.Red
        break
    }

    const evse = this.model.evseList.find((x) => x.id === payload.evseId)
    if (evse) {
      evse.state = colorState
      evse.currentUser = undefined
    } else {
      const evse = new EvseModel()
      evse.id = payload.evseId
      evse.state = colorState
      evse.wattHours = 0
      this.model.evseList.push(evse)
    }

    return new StatusNotificationResponseDto()
  }

  /**
   * G05 - Lock Failure
   * N07 - Alert Event
   */
  private receiveNotifyEventRequest(payload: NotifyEventRequestDto): NotifyEventResponseDto {
    return new NotifyEventResponseDto()
  }

  /**
   * Mentioned in:
   * B07 - Get Base Report
   */
  private receiveNotifyReportRequest(payload: NotifyReportRequestDto): NotifyReportResponseDto {
    return new NotifyReportResponseDto()
  }

  /**
   * E01 - Start Transaction options
   * E02 - Start Transaction - Cable Plugin First
   * E03 - Start Transaction - IdToken First
   * E05 - Start Transaction - Id not Accepted
   * E06 - Stop Transaction options
   * E07 - Transaction locally stopped by IdToken
   * E08 - Transaction stopped while Charging Station is offline
   * E09 - When cable disconnected on EV-side: Stop Transaction
   * E10 - When cable disconnected on EV-side: Suspend Transaction
   * J02 - Sending transaction related Meter Values
   * Mentioned in:
   * B12 - Reset - With Ongoing Transaction
   * C02 - Authorization using a start button
   */
  private receiveTransactionEventRequest(payload: TransactionEventRequestDto): TransactionEventResponseDto {
    if (payload.meterValue) {
      for (const meterValue of payload.meterValue) {
        if (meterValue.sampledValue) {
          for (const sampledValue of meterValue.sampledValue) {
            this.setDefaultValuesForSampledValue(sampledValue)
            if (
              sampledValue.context === ReadingContextEnum['Sample.Periodic'] &&
              sampledValue.measurand === MeasurandEnum['Energy.Active.Import.Register']
            ) {
              const transaction = this.transactions.find((x) => (x.id = payload.transactionInfo.transactionId))
              if (transaction && transaction.evseId) {
                const evse = this.model.evseList.find((x) => x.id === transaction.evseId)
                if (evse) {
                  evse.wattHours = sampledValue.value
                }
              }
            }
          }
        }
      }
    }

    switch (payload.eventType) {
      case TransactionEventEnum.Started:
        this.transactions.push({
          rfid: null,
          currentUser: null,
          id: payload.transactionInfo.transactionId,
          evseId: payload.evse.id,
        })
        break
      case TransactionEventEnum.Ended:
        this.transactions = this.transactions.filter((x) => x.id !== payload.transactionInfo.transactionId)
        break
      case TransactionEventEnum.Updated:
      default:
        break
    }

    return new TransactionEventResponseDto()
  }

  private setDefaultValuesForSampledValue(sampledValue: SampledValueDto): void {
    sampledValue.context = sampledValue.context || ReadingContextEnum['Sample.Periodic']
    sampledValue.location = sampledValue.location || LocationEnum.Outlet
    sampledValue.measurand = sampledValue.measurand || MeasurandEnum['Energy.Active.Import.Register']
  }
}
