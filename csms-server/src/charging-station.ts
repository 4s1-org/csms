import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  OcppErrorCodeEnum,
  ResponseBaseDto,
  CsmsError,
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
} from '@yellowgarbagebag/ocpp-lib'
import { Logger } from '@yellowgarbagebag/common-lib'
import { ChargingStationModel, ChargingStationState } from '@yellowgarbagebag/csms-lib'

export class ChargingStation implements IReceiveMessage {
  public readonly logger = new Logger(this.model.uniqueIdentifier)
  public heartbeatInterval = 3600

  public constructor(public readonly model: ChargingStationModel, private readonly sendMessage: ISendMessage) {
    // nothing to do
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
   * B01 - Cold Boot Charging Station
   * B02 - Cold Boot Charging Station - Pending
   * B03 - Cold Boot Charging Station - Rejected
   */
  private receiveBootNotificationRequest(payload: BootNotificationRequestDto): BootNotificationResponseDto {
    this.model.state = ChargingStationState.Online
    return new BootNotificationResponseDto(new Date().toISOString(), 1, RegistrationStatusEnum.Accepted)
  }

  /**
   * G02 - Heartbeat
   */
  private receiveHeartbeatRequest(payload: HeartbeatRequestDto): HeartbeatResponseDto {
    return new HeartbeatResponseDto(new Date().toISOString())
  }

  /**
   * J01 - Sending Meter Values not related to a transaction
   */
  private receiveMeterValuesRequest(payload: MeterValuesRequestDto): MeterValuesResponseDto {
    return new MeterValuesResponseDto()
  }

  /**
   * C01 - EV Driver Authorization using RFID
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
   */
  private receiveStatusNotificationRequest(payload: StatusNotificationRequestDto): StatusNotificationResponseDto {
    this.model.evse = []
    this.model.evse.push({
      evseId: payload.evseId,
      user: '<free>',
    })

    return new StatusNotificationResponseDto()
  }

  /**
   * G05 - Lock Failure
   */
  private receiveNotifyEventRequest(payload: NotifyEventRequestDto): NotifyEventResponseDto {
    return new NotifyEventResponseDto()
  }

  /**
   * Part of:
   * B07 - Get Base Report
   */
  private receiveNotifyReportRequest(payload: NotifyReportRequestDto): NotifyReportResponseDto {
    return new NotifyReportResponseDto()
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
}
