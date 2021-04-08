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
} from '@yellowgarbagebag/ocpp-lib'
import { Logger } from '@yellowgarbagebag/common-lib'
import { ChargingStationModel, ChargingStationState } from '@yellowgarbagebag/csms-lib'
import { ProcessEnv } from './process-env'

export class ChargingStation implements IReceiveMessage {
  public readonly logger = new Logger(this.model.uniqueIdentifier, ProcessEnv.LOG_LEVEL)
  public readonly heartbeatInterval = 3

  public constructor(public readonly model: ChargingStationModel, private readonly sendMessage: ISendMessage) {
    // nothing to do
  }

  public get currentTime(): string {
    return new Date().toISOString()
  }

  public receive(payload: RequestBaseDto, action: OcppActionEnum): ResponseBaseDto {
    this.model.lastContact = Date.now()
    this.model.lastCommand = action

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
    this.model.state = ChargingStationState.Connecting
  }

  public disconnect(): void {
    this.logger.info('Disconnected')
    this.model.state = ChargingStationState.Offline
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
    const payload = new GetVariablesRequestDto([
      new GetVariableDataDto(new ComponentDto('test'), new VariableDto('foo')),
    ])
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
    this.model.state = ChargingStationState.Online
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
    this.model.evse = []
    this.model.evse.push({
      evseId: payload.evseId,
      user: '---',
    })

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
    return new TransactionEventResponseDto()
  }
}
