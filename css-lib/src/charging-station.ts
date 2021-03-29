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
  ChargingStationDto,
  BootReasonEnum,
  IdTokenDto,
  MeterValueDto,
  ConnectorStatusEnum,
  SampledValueDto,
  SetVariablesRequestDto,
  SetVariablesResponseDto,
  SetVariableResultDto,
  SetVariableStatusEnum,
  ChangeAvailabilityRequestDto,
  ChangeAvailabilityResponseDto,
  ChangeAvailabilityStatusEnum,
  AuthorizationStatusEnum,
  GetVariablesRequestDto,
  GetVariablesResponseDto,
  GetVariableResultDto,
  GetVariableStatusEnum,
  NotifyEventRequestDto,
  EventDataDto,
  EventTriggerEnum,
  ComponentDto,
  EventNotificationEnum,
  VariableDto,
  NotifyEventResponseDto,
  RequestBaseDto,
  IReceiveMessage,
  ISendMessage,
  GetBaseReportRequestDto,
  GetBaseReportResponseDto,
  GenericDeviceModelStatusEnum,
  NotifyReportResponseDto,
  NotifyReportRequestDto,
  ResetRequestDto,
  ResetResponseDto,
  ResetStatusEnum,
  TransactionEventRequestDto,
  TransactionEventEnum,
  TriggerReasonEnum,
  TransactionDto,
  TransactionEventResponseDto,
} from '@yellowgarbagebag/ocpp-lib'
import { Logger } from '@yellowgarbagebag/common-lib'
export class ChargingStation implements IReceiveMessage {
  public readonly logger = new Logger(this.uniqueIdentifier)
  public heartbeatInterval = 3600

  public constructor(public readonly uniqueIdentifier: string, private readonly sendMessage: ISendMessage) {
    // nothing to do
  }

  public receive(payload: RequestBaseDto): ResponseBaseDto {
    if (payload instanceof SetVariablesRequestDto) {
      return this.receiveSetVariablesRequest(payload)
    }
    if (payload instanceof ChangeAvailabilityRequestDto) {
      return this.receiveChangeAvailabilityRequest(payload)
    }
    if (payload instanceof GetVariablesRequestDto) {
      return this.receiveGetVariablesRequest(payload)
    }
    if (payload instanceof GetBaseReportRequestDto) {
      return this.receiveGetBaseReportRequest(payload)
    }
    if (payload instanceof ResetRequestDto) {
      return this.receiveRequestResetRequest(payload)
    }

    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  /**
   * B01 - Cold Boot Charging Station
   * B02 - Cold Boot Charging Station - Pending
   * B03 - Cold Boot Charging Station - Rejected
   */
  public async sendBootNotificationRequest(): Promise<BootNotificationResponseDto> {
    const csDto = new ChargingStationDto('SingleSocketCharger', 'VendorX')
    const payload = new BootNotificationRequestDto(csDto, BootReasonEnum.PowerUp)
    const res = await this.sendMessage.send(payload)
    this.heartbeatInterval = res.interval
    return res
  }

  /**
   * G02 - Heartbeat
   * Mentioned in:
   * B01 - Cold Boot Charging Station
   * B04 - Offline Behavior Idle Charging Station
   */
  public async sendHeartbeatRequest(): Promise<HeartbeatResponseDto> {
    const payload = new HeartbeatRequestDto()
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * C01 - EV Driver Authorization using RFID
   */
  public async sendAuthorizationRequest_Rfid(): Promise<AuthorizeResponseDto> {
    const idTocken = new IdTokenDto('AA12345', IdTokenEnum.ISO14443)
    const payload = new AuthorizeRequestDto(idTocken)
    const res = await this.sendMessage.send(payload)

    if (res.idTokenInfo.status !== AuthorizationStatusEnum.Accepted) {
      this.logger.warn(`Authorization failed | ${res.idTokenInfo.status}`)
    }

    return res
  }

  /**
   * C02 - Authorization using a start button
   */
  public async sendAuthorizationRequest_StartButton(): Promise<AuthorizeResponseDto> {
    const idTocken = new IdTokenDto('', IdTokenEnum.NoAuthorization)
    const payload = new AuthorizeRequestDto(idTocken)
    const res = await this.sendMessage.send(payload)

    if (res.idTokenInfo.status !== AuthorizationStatusEnum.Accepted) {
      this.logger.warn(`Authorization failed | ${res.idTokenInfo.status}`)
    }

    return res
  }

  /**
   * C04 - Authorization using PIN-code
   */
  public async sendAuthorizationRequest_PinCode(): Promise<AuthorizeResponseDto> {
    const idTocken = new IdTokenDto('1234', IdTokenEnum.KeyCode)
    const payload = new AuthorizeRequestDto(idTocken)
    const res = await this.sendMessage.send(payload)

    if (res.idTokenInfo.status !== AuthorizationStatusEnum.Accepted) {
      this.logger.warn(`Authorization failed | ${res.idTokenInfo.status}`)
    }

    return res
  }

  /**
   * J01 - Sending Meter Values not related to a transaction
   */
  public async sendMeterValueRequest(): Promise<MeterValuesResponseDto> {
    const sampleValue = new SampledValueDto(53)
    const meterValue = new MeterValueDto([sampleValue], new Date().toISOString())
    const payload = new MeterValuesRequestDto(1, [meterValue])
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * E01 - Start Transaction options
   * Mentioned in:
   * B12 - Reset - With Ongoing Transaction
   * C02 - Authorization using a start button
   */
  public async sendTransactionEventRequest(): Promise<TransactionEventResponseDto> {
    const transaction = new TransactionDto('foobar')
    const payload = new TransactionEventRequestDto(
      TransactionEventEnum.Started,
      new Date().toISOString(),
      TriggerReasonEnum.CablePluggedIn,
      1,
      transaction,
    )
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * B05 - Set Variables
   */
  private receiveSetVariablesRequest(payload: SetVariablesRequestDto): SetVariablesResponseDto {
    const result: SetVariableResultDto[] = []
    for (const x of payload.setVariableData) {
      result.push(new SetVariableResultDto(SetVariableStatusEnum.Accepted, x.component, x.variable))
    }
    return new SetVariablesResponseDto(result)
  }

  /**
   * G01 - Status Notification
   * Mentioned in:
   * B01 - Cold Boot Charging Station
   * B04 - Offline Behavior Idle Charging Station
   * C02 - Authorization using a start button
   */
  public async sendStatusNotificationRequest(): Promise<StatusNotificationResponseDto> {
    const payload = new StatusNotificationRequestDto(new Date().toISOString(), ConnectorStatusEnum.Available, 1, 1)
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * Mentioned in:
   * B07 - Get Base Report
   */
  public async sendNotifyReportRequest(): Promise<NotifyReportResponseDto> {
    const payload = new NotifyReportRequestDto(1, new Date().toISOString(), 1)
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * G03 - Change Availability EVSE/Connector
   */
  private receiveChangeAvailabilityRequest(payload: ChangeAvailabilityRequestDto): ChangeAvailabilityResponseDto {
    return new ChangeAvailabilityResponseDto(ChangeAvailabilityStatusEnum.Accepted)
  }

  /**
   * B07 - Get Base Report
   */
  private receiveGetBaseReportRequest(payload: GetBaseReportRequestDto): GetBaseReportResponseDto {
    return new GetBaseReportResponseDto(GenericDeviceModelStatusEnum.Accepted)
  }

  /**
   * B06 - Get Variables
   */
  private receiveGetVariablesRequest(payload: GetVariablesRequestDto): GetVariablesResponseDto {
    const result: GetVariableResultDto[] = []
    for (const x of payload.getVariableData) {
      result.push(new GetVariableResultDto(GetVariableStatusEnum.Accepted, x.component, x.variable))
    }
    return new GetVariablesResponseDto(result)
  }

  /**
   * B11 - Reset - Without Ongoing Transaction
   * B12 - Reset - With Ongoing Transaction
   */
  private receiveRequestResetRequest(payload: ResetRequestDto): ResetResponseDto {
    return new ResetResponseDto(ResetStatusEnum.Accepted)
  }

  /**
   * G05 - Lock Failure
   */
  public async sendNotifyEventRequest_LockFailure(): Promise<NotifyEventResponseDto> {
    // ToDo: Das so umsetzen:
    // G05.FR.02
    // The Charging Station SHALL send a NotifyEventRequest to the CSMS for the
    // ConnectorPlugRetentionLock component with
    // variable = Problem,
    // Value = True.

    const data: EventDataDto[] = []
    data.push(
      new EventDataDto(
        1,
        new Date().toISOString(),
        EventTriggerEnum.Alerting,
        'foo',
        new ComponentDto('ConnectorPlugRetentionLock'),
        EventNotificationEnum.HardWiredMonitor,
        new VariableDto('Problem'),
      ),
    )
    const payload = new NotifyEventRequestDto(new Date().toISOString(), 1, data)
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }
}
